const https = require('https');

// Danh sách các video CrashCourse chính thức
const crashCourseVideos = [
  { topic: 'intro', id: '3ez10ADR_gM', title: 'Intro to Economics: Crash Course Econ #1' },
  { topic: 'specialization', id: 'NI9TLDIPVcs', title: 'Specialization and Trade: Crash Course Econ #2' },
  { topic: 'markets', id: 'g9aDizJpd_s', title: 'Supply and Demand: Crash Course Econ #4' },
  { topic: 'macro', id: 'd8uTB5XorBw', title: 'Macroeconomics: Crash Course Econ #5' },
  { topic: 'productivity', id: 'UHiUYj5EA0w', title: 'Productivity and Growth: Crash Course Econ #6' },
  { topic: 'inflation', id: 'T8-85cZRI9o', title: 'Inflation and Bubbles: Crash Course Econ #7' },
  { topic: 'fiscal_policy', id: '3sUCSGVYzI0', title: 'Fiscal Policy and Stimulus: Crash Course Econ #8' },
  { topic: 'deficits', id: 'Dugn51K_6WA', title: 'Deficits & Debt: Crash Course Econ #9' },
  { topic: 'monetary_policy', id: '1dq7mMort9o', title: 'Monetary Policy and the Federal Reserve: Crash Course Econ #10' },
  { topic: 'money', id: 'GPOv72Awo68', title: 'Money and Finance: Crash Course Econ #11' },
  { topic: 'recession', id: 'BHw4NStQsT8', title: 'Recession, Hyperinflation: Crash Course Econ #13' },
  { topic: 'monopoly', id: 'Sb_-wfmJnHA', title: 'Monopolies and Anti-Competitive Markets: Crash Course Econ #25' },
  { topic: 'price_controls', id: '01lKDkYSFDg', title: 'Price Controls, Subsidies: Crash Course Econ #20' },
  { topic: 'market_structures', id: 'cbBKoyjFLUY', title: 'Game Theory & Oligopoly: Crash Course Econ #26' }
];

// Các video từ Marginal Revolution University (MRU)
const mruVideos = [
  { topic: 'demand', id: 'kUPm2tMCbGE', title: 'The Demand Curve - MRU' },
  { topic: 'supply', id: 'nKvrbOq1OfI', title: 'The Supply Curve - MRU' },
  { topic: 'equilibrium', id: '7eZcPs9zTu8', title: 'The Equilibrium Price - MRU' },
  { topic: 'elasticity', id: 'HHcblIxiAAk', title: 'Elasticity of Demand - MRU' },
  { topic: 'price_ceiling', id: '1EzY4Vl460U', title: 'Price Ceilings - MRU' },
  { topic: 'price_floor', id: 'A0h_j8bYh3Y', title: 'Price Floors - MRU' },
  { topic: 'taxes', id: 'qlTld42iVwA', title: 'A Tax on Buyers vs Sellers - MRU' },
  { topic: 'banking', id: 'fTTGALaRZoc', title: 'The Money Multiplier - MRU' }
];

// Các video từ Jacob Clifford (ACDC Econ) & Khan Academy
const cliffordKhanVideos = [
  { topic: 'cost_curves', id: 'qY4N3r9v34E', title: 'Short-Run Costs (MC, ATC, AVC) - Jacob Clifford' },
  { topic: 'elasticity_tr', id: '4oj_b6GZ__8', title: 'Elasticity and Total Revenue - Jacob Clifford' },
  { topic: 'adas', id: 'mK3T8oWpYq4', title: 'Aggregate Demand & Aggregate Supply - Jacob Clifford' },
  { topic: 'unemployment', id: 'SZyXU3Z_R4E', title: 'Unemployment Rate - Jacob Clifford' },
  { topic: 'real_gdp', id: '29S7xFzcaDQ', title: 'Nominal vs Real GDP - Khan Academy' }
];

const allCandidates = [...crashCourseVideos, ...mruVideos, ...cliffordKhanVideos];

function check(item) {
  return new Promise(resolve => {
    const req = https.get('https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + item.id + '&format=json', res => {
      let d = '';
      res.on('data', chunk => d += chunk);
      res.on('end', () => {
        resolve({ ...item, status: res.statusCode, valid: res.statusCode === 200 });
      });
    });
    req.on('error', () => resolve({ ...item, status: 'ERR', valid: false }));
    req.setTimeout(3000, () => { req.destroy(); resolve({ ...item, status: 'TIMEOUT', valid: false }); });
  });
}

Promise.all(allCandidates.map(check)).then(results => {
  console.log('=== KẾT QUẢ KIỂM TRA VIDEO CHUẨN ===');
  results.forEach(r => {
    console.log(`${r.valid ? '✓' : '❌'} [${r.status}] ${r.id} : ${r.title}`);
  });
  process.exit(0);
});
