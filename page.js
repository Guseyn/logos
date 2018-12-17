// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(230, 180);

const path = draw.path('M 10 30 C 10 30 120 120 170 90 L -50 200')
path.fill('none').move(10, 10)
path.stroke({ color: '#333', width: 3, linecap: 'round', linejoin: 'round' })

const text = draw.text(function(add) {
  add.tspan('Page').fill('#C40233');
});
text.move(30, 132).rotate(-26);
text.font({
  family:   'Lucida Grande',
  color: 'red',
  size:     28,
  anchor:   'middle',
  leading:  '1.5em'
});

fs.writeFileSync('./page.html', draw.svg());
