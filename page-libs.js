// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(125, 125);

const circle = draw.circle(125).fill('#c65454')
const text = draw.text(function(add){
  add.tspan('page-libs').fill('#fff')
});
text.font({
  x: '50%',
  y: '54%',
  size: 24,
  family: 'Palatino',
  anchor: 'middle',
  leading: '1.5em'
});

const citext = draw.text(function(add){
  add.tspan('&#9677;').fill('#fff')
});
citext.font({
  x: '50%',
  y: '78%',
  size: 34,
  family: 'Palatino',
  anchor: 'middle',
  leading: '1.5em'
});

fs.writeFileSync('./page-libs.svg', draw.svg());
