// @ts-check
import { splitInputLines } from '../../common.js';
import { resolve } from 'path';

const map = splitInputLines(resolve('./data')).filter(Boolean).map(e=>e.split(''));

let posX = 3;
let treeCount = 0;
const maxPosX = map[0].length;

for (let posY = 1; posY < map.length; posY++) {
  if (map[posY][posX] === '#') treeCount += 1;
  posX += 3;
  if (posX > maxPosX) posX = 3;
}

console.log(`You will encounter ${treeCount} trees`);
