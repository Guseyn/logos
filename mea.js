const window  = require('svgdom');
const SVG  = require('svg.js')(window);
const document = window.document;
const fs = require('fs');
const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync('./BRUSHSCI.ttf');

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
).fill('#404952').stroke({ width: 1.5, color: '#404952' }).attr('fill-rule', 'evenodd').attr('stroke-linejoin', 'miter').attr('stroke-linecap', 'round').move(80, 125.2)

draw.path(
  textToSVG.getD('mea', {
    x: 107.5,
    y: 51.5,
    fontSize: 40,
    family: 'Brush Script MT',
    leading: '1.5em'
  })
).fill('white')
draw.path(
  textToSVG.getD('{java}', {
    x: 95.5,
    y: 100.5,
    fontSize: 30,
    family: 'Brush Script MT',
    leading: '1.5em'
  })
).fill('#eb4d4b')
fs.writeFileSync('./mea.svg', draw.svg());
