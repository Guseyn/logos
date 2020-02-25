// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(180, 160);

const blue = '#82BCE5';
const green = '#CAE595';
const grey = '#999';
const white = 'none';
draw.circle(30).move(60, 10).fill(blue);
draw.circle(28).move(30, 65).fill('none').stroke({ width: 4, color: blue });
draw.circle(20).move(35, 70).fill(white);
draw.circle(30).move(90, 65).fill(blue);
draw.circle(28).move(60, 120).fill('none').stroke({ width: 4, color: blue });
draw.circle(20).move(65, 125).fill(white);
draw.circle(28).move(120, 120).fill('none').stroke({ width: 4, color: blue });
draw.circle(20).move(125, 125).fill(white);

fs.writeFileSync('./cutie.svg', draw.svg());
