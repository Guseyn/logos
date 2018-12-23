// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(230, 180);

const path = draw.path('M 10 30 L 40 60 240 10 M 40 60 L 40 180')
path.fill('none').move(10, 10)
path.stroke({ color: '#333', width: 3, linecap: 'round', linejoin: 'round' })

const text = draw.text(function(add) {
  add.tspan('WALL').fill('#0294c4');
});
text.move(30, 130).rotate(90);
text.font({
  family:   'Lucida Grande',
  size:     28,
  anchor:   'middle',
  leading:  '1.5em'
});

fs.writeFileSync('./wall.svg', draw.svg());
