// GitHub Sync Engine (100% Node.js thuần, không cần cài đặt Git CLI)
// Đồng bộ tự động toàn bộ mã nguồn lên GitHub và kích hoạt GitHub Pages 24/7
const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_DIR = __dirname;
const CONFIG_FILE = path.join(BASE_DIR, 'github_config.json');

// Đọc cấu hình hoặc lấy từ tham số dòng lệnh
function getConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    } catch (e) {
      console.error("Lỗi đọc github_config.json:", e.message);
    }
  }
  return {
    username: process.env.GITHUB_USERNAME || "",
    token: process.env.GITHUB_TOKEN || "",
    repo: process.env.GITHUB_REPO || "kinh-te-hoc-a-plus"
  };
}

function githubRequest(endpoint, method = 'GET', data = null, token = '') {
  return new Promise((resolve, reject) => {
    const url = new URL(endpoint.startsWith('http') ? endpoint : `https://api.github.com${endpoint}`);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'User-Agent': 'EconMaster-Sync-Agent',
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${token}`
      }
    };

    let bodyData = null;
    if (data) {
      bodyData = JSON.stringify(data);
      options.headers['Content-Type'] = 'application/json';
      options.headers['Content-Length'] = Buffer.byteLength(bodyData);
    }

    const req = https.request(options, (res) => {
      let rawData = '';
      res.on('data', chunk => rawData += chunk);
      res.on('end', () => {
        let parsed;
        try {
          parsed = rawData ? JSON.parse(rawData) : {};
        } catch (e) {
          parsed = { raw: rawData };
        }
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ status: res.statusCode, data: parsed });
        } else {
          reject({ status: res.statusCode, data: parsed });
        }
      });
    });

    req.on('error', reject);
    if (bodyData) req.write(bodyData);
    req.end();
  });
}

// Lấy danh sách tất cả các tệp cần đồng bộ
function getFilesToSync(dir = BASE_DIR, relativePath = '') {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const IGNORED = ['node_modules', '.git', 'github_config.json', 'test_solver.js'];

  for (const entry of entries) {
    if (IGNORED.includes(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    const rel = relativePath ? `${relativePath}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      files = files.concat(getFilesToSync(fullPath, rel));
    } else if (entry.isFile()) {
      files.push({
        path: rel.replace(/\\/g, '/'),
        fullPath: fullPath
      });
    }
  }
  return files;
}

async function syncToGitHub(commitMessage = "Cập nhật ứng dụng EconMaster A+") {
  const config = getConfig();
  if (!config.username || !config.token) {
    console.log("⚠️ Chưa có thông tin cấu hình (username hoặc token). Vui lòng cập nhật github_config.json!");
    return false;
  }

  const { username, token, repo } = config;
  console.log(`\n======================================================`);
  console.log(`🚀 BẮT ĐẦU ĐỒNG BỘ LÊN GITHUB: ${username}/${repo}`);
  console.log(`======================================================`);

  try {
    // 1. Kiểm tra hoặc tạo Repository
    let repoExists = false;
    try {
      await githubRequest(`/repos/${username}/${repo}`, 'GET', null, token);
      repoExists = true;
      console.log(`✓ Kho lưu trữ https://github.com/${username}/${repo} đã tồn tại.`);
    } catch (err) {
      if (err.status === 404) {
        console.log(`⏳ Đang tạo mới kho lưu trữ ${repo} trên tài khoản ${username}...`);
        await githubRequest('/user/repos', 'POST', {
          name: repo,
          description: "EconMaster A+ | Nền Tảng Chinh Phục Điểm 10 Kinh Tế Học Đại Cương",
          homepage: `https://${username}.github.io/${repo}/`,
          private: false,
          auto_init: true
        }, token);
        console.log(`✓ Đã tạo thành công kho lưu trữ!`);
        // Chờ 2 giây để GitHub khởi tạo branch main
        await new Promise(r => setTimeout(r, 2000));
      } else {
        throw err;
      }
    }

    // 2. Lấy commit SHA mới nhất của nhánh main
    let latestCommitSha = null;
    let baseTreeSha = null;
    try {
      const refRes = await githubRequest(`/repos/${username}/${repo}/git/refs/heads/main`, 'GET', null, token);
      latestCommitSha = refRes.data.object.sha;
      const commitRes = await githubRequest(`/repos/${username}/${repo}/git/commits/${latestCommitSha}`, 'GET', null, token);
      baseTreeSha = commitRes.data.tree.sha;
    } catch (e) {
      // Thử nhánh master nếu main chưa có
      try {
        const refRes = await githubRequest(`/repos/${username}/${repo}/git/refs/heads/master`, 'GET', null, token);
        latestCommitSha = refRes.data.object.sha;
        const commitRes = await githubRequest(`/repos/${username}/${repo}/git/commits/${latestCommitSha}`, 'GET', null, token);
        baseTreeSha = commitRes.data.tree.sha;
      } catch (err2) {
        console.log("ℹ️ Nhánh mới, sẽ tạo commit gốc.");
      }
    }

    // 3. Đọc tất cả các file và tạo Blobs
    const files = getFilesToSync();
    console.log(`📦 Đang tải lên ${files.length} tệp tin dự án...`);

    const treeItems = [];
    for (const file of files) {
      const content = fs.readFileSync(file.fullPath);
      const isText = /\.(html|js|css|md|txt|json|bat)$/i.test(file.path);

      let blobData;
      if (isText) {
        blobData = {
          content: content.toString('utf8'),
          encoding: 'utf-8'
        };
      } else {
        blobData = {
          content: content.toString('base64'),
          encoding: 'base64'
        };
      }

      const blobRes = await githubRequest(`/repos/${username}/${repo}/git/blobs`, 'POST', blobData, token);
      treeItems.push({
        path: file.path,
        mode: '100644',
        type: 'blob',
        sha: blobRes.data.sha
      });
      process.stdout.write('.');
    }
    console.log(`\n✓ Đã tạo blobs thành công.`);

    // 4. Tạo Tree
    const treePayload = { tree: treeItems };
    if (baseTreeSha) treePayload.base_tree = baseTreeSha;

    const newTreeRes = await githubRequest(`/repos/${username}/${repo}/git/trees`, 'POST', treePayload, token);
    const newTreeSha = newTreeRes.data.sha;

    // 5. Tạo Commit
    const commitPayload = {
      message: `${commitMessage} (${new Date().toLocaleString('vi-VN')})`,
      tree: newTreeSha
    };
    if (latestCommitSha) {
      commitPayload.parents = [latestCommitSha];
    }

    const newCommitRes = await githubRequest(`/repos/${username}/${repo}/git/commits`, 'POST', commitPayload, token);
    const newCommitSha = newCommitRes.data.sha;

    // 6. Cập nhật Ref (Push to main)
    try {
      await githubRequest(`/repos/${username}/${repo}/git/refs/heads/main`, 'PATCH', {
        sha: newCommitSha,
        force: true
      }, token);
    } catch (e) {
      // Nếu ref chưa tồn tại, tạo mới
      await githubRequest(`/repos/${username}/${repo}/git/refs`, 'POST', {
        ref: 'refs/heads/main',
        sha: newCommitSha
      }, token);
    }
    console.log(`✓ Đã đẩy commit mới thành công: ${newCommitSha.substring(0, 7)}`);

    // 7. Kích hoạt GitHub Pages nếu chưa bật
    try {
      await githubRequest(`/repos/${username}/${repo}/pages`, 'POST', {
        source: { branch: 'main', path: '/' }
      }, token);
      console.log(`✓ Đã kích hoạt GitHub Pages thành công!`);
    } catch (e) {
      // Đã bật trước đó hoặc đang cập nhật
      if (e.status === 409 || e.status === 400) {
        // Pages already enabled
      }
    }

    const pagesUrl = `https://${username}.github.io/${repo}/`;
    console.log(`\n🎉 ĐỒNG BỘ THÀNH CÔNG RỰC RỠ!`);
    console.log(`🌐 Website online của bạn tại: ${pagesUrl}`);
    console.log(`📂 Repository GitHub: https://github.com/${username}/${repo}`);
    return pagesUrl;

  } catch (err) {
    console.error(`❌ Lỗi đồng bộ:`, err);
    if (err.data && err.data.message) {
      console.error(`Chi tiết lỗi từ GitHub: ${err.data.message}`);
    }
    return false;
  }
}

// Nếu chạy trực tiếp từ dòng lệnh
if (require.main === module) {
  const msg = process.argv[2] || "Cập nhật ứng dụng EconMaster A+";
  syncToGitHub(msg);
}

module.exports = { syncToGitHub, getConfig };
