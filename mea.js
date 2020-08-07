const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');

const draw = SVG(document.documentElement).size(222, 236);

draw.path(
  'M 20 -10 L 80 -90 L 150 -130 165 -135 L 200 -110 L 220 -90 L 240 -10 L 20 -10'
).fill('#BDC3C7').attr('stroke-linejoin', 'miter').attr('stroke-linecap', 'round').move(1, 1)
draw.path(
  'M 100 0 L 125.5 0 M 174.5 0 L 200 0 M 130 0 L 170 0'
  +
  'M 100 0 L 100 -80 C 120 -100 180 -100 200 -80 L 200 0'
  +
  'M 115 0 L 115 -60 C 120 -70 180 -70 185 -60 L 185 0'
).fill('#6C7A89').stroke({ width: 1.5, color: '#454545' }).attr('fill-rule', 'evenodd').attr('stroke-linejoin', 'miter').attr('stroke-linecap', 'round').move(80, 30)

draw.path(
  'M 115 0 L 115 -60 C 120 -70 180 -70 185 -60 L 185 0'
).fill('#2b3036').stroke({ width: 1.5, color: '#2b3036' }).attr('fill-rule', 'evenodd').attr('stroke-linejoin', 'miter').attr('stroke-linecap', 'round').move(95.5, 57)
draw.path(
  'M 110.0 80 L 189.5 80 L 187 70 L 113.0 70 L 110.0 80'
  +
  'M 118 50 L 182 50 L 180 40 L 120 40 L 118 50'
  +
  'M 125.0 20 L 175 20 L 172 10 L 128 10 L 125.0 20 '

).fill('#616d7b').attr('fill-rule', 'evenodd').stroke({ width: 1.5, color: '#616d7b' }).attr('stroke-linejoin', 'miter').attr('stroke-linecap', 'round').move(90, 136)
draw.path(
  // 'M 100 100 L 125 0 M 200 100 L 175 0 M 105 100 L 130 0 M 195 100 L 170 0 '
  'M 100 100 L 125 0 L 130 0 L 105 100 L 100 100'
  +
  'M 200 100 L 175 0 L 170 0 L 195 100 L 200 100'
).fill('#404952').stroke({ width: 1.5, color: '#404952' }).attr('fill-rule', 'evenodd').attr('stroke-linejoin', 'miter').attr('stroke-linecap', 'round').move(80, 125)
draw.text(function(add){
  add.tspan('mea').fill('white')
}).font({
  x: 131.5,
  y: 51.5,
  size: 40,
  family: 'Brush Script MT',
  anchor: 'middle',
  leading: '1.5em'
})
draw.text(function(add){
  add.tspan('{java}').fill('#eb4d4b')
}).font({
  x: 130.0,
  y: 101.5,
  size: 30,
  family: 'Brush Script MT',
  anchor: 'middle',
  leading: '1.5em'
})
fs.writeFileSync('./mea.svg', draw.svg());
