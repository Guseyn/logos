// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(140, 50);

// use svg.js as normal
draw.line(10, 11, 80, 11).stroke({ width: 2, color: '#336699' });
draw.line(11, 11, 11, 40).stroke({ width: 2, color: '#336699' });
draw.line(11, 39, 80, 39).stroke({ width: 2, color: '#336699' });
draw.rect(68, 26).move(12, 12).fill('#fff');
draw.rect(50, 30).move(80, 10).fill('#336699');
var pageText = draw.text(function(add){
  add.tspan('cutie').fill('#333')
}).move(46, 15);
pageText.font({
  family: 'Helvetica',
  size: 24,
  anchor: 'middle',
  leading: '1.5em'
});

var libsText = draw.text(function(add){
  add.tspan('libs').fill('#fff')
}).move(106, 15);
libsText.font({
  family: 'Helvetica',
  size: 24,
  anchor: 'middle',
  leading: '1.5em'
});

fs.writeFileSync('./cutie-libs.svg', draw.svg());
