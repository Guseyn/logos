// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(230, 180);

const blue = '#82BCE5';
const green = '#CAE595';
const grey = '#999';
draw.circle(30).move(60, 10).fill(blue);
draw.line(65, 35, 45, 65).stroke({ width: 2, color: grey });
draw.line(85, 35, 105, 65).stroke({ width: 2, color: grey });
draw.circle(30).move(30, 65).fill(green);
draw.circle(30).move(90, 65).fill(blue);
draw.line(95, 90, 75, 120).stroke({ width: 2, color: grey });
draw.line(115, 90, 135, 120).stroke({ width: 2, color: grey });
draw.circle(30).move(60, 120).fill(green);
draw.circle(30).move(120, 120).fill(green);

const text = draw.text(function(add) {
  add.tspan('cuti').fill(blue);
  add.tspan('e').fill(green);
});
text.move(130, 162);
text.font({
  family: 'Tahoma',
  size: 22,
  anchor: 'middle',
  leading: '1.5em'
});

fs.writeFileSync('./cutie.svg', draw.svg());
