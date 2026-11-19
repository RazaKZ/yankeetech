const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf-8');
const lines = js.split('\n');

lines.forEach((l, i) => {
  if (l.includes('estimator') || l.includes('selectTrack') || l.includes('setCurrency') || l.includes('ESTIMATOR')) {
    console.log('L' + (i + 1) + ': ' + l.trim().slice(0, 80));
  }
});
