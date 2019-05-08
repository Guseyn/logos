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
const white = '#fdfdfd';
draw.circle(30).move(60, 10).fill(blue);
draw.line(65, 35, 45, 65).stroke({ width: 1,color: grey });
draw.line(85, 35, 105, 65).stroke({ width: 1, color: grey });
draw.circle(30).move(30, 65).fill(white).stroke({ width: 1, color: grey });
draw.circle(30).move(90, 65).fill(blue);
draw.line(95, 90, 75, 120).stroke({ width: 1, color: grey });
draw.line(115, 90, 135, 120).stroke({ width: 1, color: grey });
draw.circle(30).move(60, 120).fill(white).stroke({ width: 1, color: grey });
draw.circle(30).move(120, 120).fill(white).stroke({ width: 1, color: grey });

fs.writeFileSync('./cutie.svg', draw.svg());
