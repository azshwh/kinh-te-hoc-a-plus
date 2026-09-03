const https = require('https');

const ids = [
  'tZvjh1dxz08', 'geoe-6NBy10', '9MpVjxxpExM', '0xMCWr0O3Hs',
  '3midaQqm7NM', 'eNxk5-EJFrY', '13JOGWzY8kE', 'BlAfFgKQ5r8',
  '8lPbkHVxenU', 'UWImfFax8Ew', 'PCcVODWm-oY', 'dqxQ3E1bubI',
  'mWwXmH-n5Bo', 'AecowUb79Xk', '7Qtr_vA3Prw', 'joG6-QZc-fw',
  '4XQXiCLzyAw', 'tAvA_cOeeOI'
];

let count = 0;
ids.forEach(id => {
  const req = https.get('https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + id + '&format=json', res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      try {
        const j = JSON.parse(d);
        console.log(id + ' | ' + j.title);
      } catch(e){}
      if (++count === ids.length) process.exit(0);
    });
  });
  req.on('error', () => { if (++count === ids.length) process.exit(0); });
  req.setTimeout(2500, () => { req.destroy(); if (++count === ids.length) process.exit(0); });
});
