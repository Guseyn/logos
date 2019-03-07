// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(125, 125);

const circle = draw.circle(125).fill('#548dc6')
const text = draw.text(function(add){
  add.tspan('cuties').fill('#fff')
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
  add.tspan('&#x2606;').fill('#fff')
});
citext.font({
  x: '50%',
  y: '78%',
  size: 20,
  family: 'Palatino',
  anchor: 'middle',
  leading: '1.5em'
});

fs.writeFileSync('./cutie-libs.svg', draw.svg());
