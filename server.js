// Server tĩnh cục bộ bằng Node.js thuần (không cần cài đặt thư viện ngoài)
// Giúp chạy ứng dụng trên http://localhost:3000, khắc phục 100% lỗi trình duyệt chặn nhúng YouTube trên giao thức file://
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  const filePath = path.join(BASE_DIR, reqUrl);

  // Bảo mật: ngăn chặn path traversal
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end(`404 Not Found: ${reqUrl}`);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  ECONMASTER A+ ĐANG CHẠY TẠI: http://localhost:${PORT}`);
  console.log(`  (Đã mở trên trình duyệt, không còn bị chặn nhúng YouTube)`);
  console.log(`======================================================\n`);
});
