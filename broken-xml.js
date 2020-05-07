// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(500, 500);

const color = '#DC143C';
const border = '#222';
const X = draw.polyline(
  [
    10, 15, 30, 10,
    45, 35, 60, 10,
    80, 15, 55, 40,
    80, 65, 60, 70,
    45, 45, 30, 70,
    10, 65, 35, 40, 
    10, 15
  ]
).fill(color).rotate(-5).stroke({ width: 2, color: border, linecap: 'butt', linejoin: 'bevel' }).move(10, 10)
const M_ = draw.polyline(
  [
    45, 55, 25, 25,
    25, 70, 10, 70,
    10, 15, 30, 10,
    45, 35, 45, 55
  ]
).fill(color).rotate(-5).stroke({ width: 2, color: border, linecap: 'butt', linejoin: 'bevel' }).move(85, 15)
const _M = draw.polyline(
  [
    45, 35, 60, 10,
    80, 15, 80, 70,
    65, 70, 65, 25,
    45, 55, 45, 35
  ]
).fill(color).rotate(5).stroke({ width: 2, color: border, linecap: 'butt', linejoin: 'bevel' }).move(124, 8)
const L = draw.polyline(
  [
    10, 15, 25, 10,
    25, 60, 55, 55,
    65, 70, 10, 70,
    10, 15
  ]
).fill(color).rotate(-5).stroke({ width: 2, color: border, linecap: 'butt', linejoin: 'bevel' }).move(165, 20)

fs.writeFileSync('./broken-xml.svg', draw.svg());
