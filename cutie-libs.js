// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(125, 34);

// use svg.js as normal
draw.line(2, 3, 72, 3).stroke({ width: 2, color: '#336699' });
draw.line(3, 3, 3, 32).stroke({ width: 2, color: '#336699' });
draw.line(3, 31, 72, 31).stroke({ width: 2, color: '#336699' });
draw.rect(68, 26).move(4, 4).fill('#fff');
draw.rect(50, 30).move(72, 2).fill('#336699');
var pageText = draw.text(function(add){
  add.tspan('cutie').fill('#333')
}).move(38, 7);
pageText.font({
  family: 'Helvetica',
  size: 24,
  anchor: 'middle',
  leading: '1.5em'
});

var libsText = draw.text(function(add){
  add.tspan('libs').fill('#fff')
}).move(98, 7);
libsText.font({
  family: 'Helvetica',
  size: 24,
  anchor: 'middle',
  leading: '1.5em'
});

fs.writeFileSync('./cutie-libs.svg', draw.svg());
