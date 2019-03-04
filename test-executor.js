// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(150, 150);

// use svg.js as normal
draw.line(15, 15, 100, 15).stroke({ width: 10, color: '#7fbf7f', linecap: 'round' });
draw.line(15, 30, 90, 30).stroke({ width: 10, color: '#7fbf7f', linecap: 'round' });
draw.line(15, 45, 110, 45).stroke({ width: 10, color: '#7fbf7f', linecap: 'round' });
draw.line(15, 60, 100, 60).stroke({ width: 10, color: '#ff6666', linecap: 'round' });
draw.line(15, 75, 90, 75).stroke({ width: 10, color: '#7fbf7f', linecap: 'round' });
draw.line(15, 90, 80, 90).stroke({ width: 10, color: '#ff6666', linecap: 'round' });
draw.line(15, 105, 90, 105).stroke({ width: 10, color: '#7fbf7f', linecap: 'round' });
draw.line(15, 120, 110, 120).stroke({ width: 10, color: '#7fbf7f', linecap: 'round' });

const text = draw.text(function(add) {
  add.tspan('6').fill('#7fbf7f');
  add.tspan(' / ').fill('#111');
  add.tspan('2').fill('#ff6666');
});
text.move(30, 130);
text.font({
  family: 'Tahoma',
  size: 16,
  anchor: 'middle',
  leading: '1.5em'
});

fs.writeFileSync('./test-executor.svg', draw.svg());
