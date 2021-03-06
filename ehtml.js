// returns a window with a document and an svg root node
const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

// create svg.js instance
const draw = SVG(document.documentElement).size(284, 62);

const color = '#ffdd59';
const border = '#485460';
const E_H_T_M_L = draw.polyline(
  [
    [ 20, 20 ], [ 60, 20 ],
    [ 20, 20 ], [ 20, 80 ],
    [ 20, 80 ], [ 300, 80 ],
    [ 300, 80 ], [ 290, 70 ],
    [ 290, 70 ], [ 260, 70 ],
    [ 260, 70 ], [ 260, 20 ],
    [ 260, 20 ], [ 250, 20 ],
    [ 250, 20 ], [ 250, 70 ],

    [ 245, 70 ], [ 240, 70 ],
    [ 240, 70 ], [ 240, 20 ],
    [ 240, 20 ], [ 230, 20 ],
    [ 230, 20 ], [ 210, 40 ],
    [ 210, 40 ], [ 190, 20 ],
    [ 190, 20 ], [ 180, 20 ],
    [ 180, 20 ], [ 180, 70 ],
    [ 180, 70 ], [ 190, 70 ],
    [ 190, 70 ], [ 190, 35 ],
    [ 190, 35 ], [ 210, 55 ],
    [ 210, 55 ], [ 230, 35 ],
    [ 230, 35 ], [ 230, 70 ],

    [ 180, 70 ], [ 160, 70 ],
    [ 160, 70 ], [ 150, 70 ],
    [ 150, 70 ], [ 150, 30 ],
    [ 150, 30 ], [ 170, 30 ],
    [ 170, 30 ], [ 170, 20 ],
    [ 170, 20 ], [ 120, 20 ],
    [ 120, 20 ], [ 120, 30 ],
    [ 120, 30 ], [ 140, 30 ],
    [ 140, 30 ], [ 140, 70 ],

    [ 140, 70 ], [ 110, 70 ],
    [ 110, 70 ], [ 110, 20 ],
    [ 110, 20 ], [ 100, 20 ],
    [ 100, 20 ], [ 100, 45 ],
    [ 100, 45 ], [ 80, 45 ],
    [ 80, 45 ], [ 80, 70 ],
    [ 80, 70 ], [ 70, 70 ],
    [ 70, 70 ], [ 70, 20 ],
    [ 70, 20 ], [ 80, 20 ],
    [ 80, 20 ], [ 80, 55 ],
    [ 80, 55 ], [ 100, 55 ],
    [ 100, 55 ], [ 100, 70 ],

    [ 30, 70 ], [ 30, 55 ],
    [ 30, 55 ], [ 60, 55 ],
    [ 60, 55 ], [ 60, 45 ],
    [ 60, 45 ], [ 30, 45 ],
    [ 30, 45 ], [ 30, 30 ],
    [ 30, 30 ], [ 60, 30 ],
    [ 60, 30 ], [ 60, 19.5 ]
  ]
).fill(color).stroke({ width: 1, color: border }).move(1, 1)

const gap1 = draw.polyline(
  [
    [ 181, 70 ], [ 190, 70 ],
  ]
).fill(color).stroke({ width: 6, color: color }).move(161.5, 50)

const gap2 = draw.polyline(
  [
    [ 71, 70 ], [ 80, 70 ],
  ]
).fill(color).stroke({ width: 6, color: color }).move(51.5, 50)

const gap3 = draw.polyline(
  [
    [ 80, 46 ], [ 80, 55 ],
  ]
).fill(color).stroke({ width: 6, color: color }).move(61, 27)

fs.writeFileSync('./ehtml.svg', draw.svg());
