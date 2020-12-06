// @ts-check
import { splitInputLines } from '../../common.js';
import { resolve } from 'path';

const map = splitInputLines(resolve('./data')).filter(Boolean).map(e=>e.split(''));

let posY = 1;
let treeCount = 0;

for (let posX = 3; posX < map.length; posX += 3) {
  if (map[posX][posY] === '#') treeCount += 1;
  posY++;
}

console.log(`You will encounter ${treeCount} trees`);
