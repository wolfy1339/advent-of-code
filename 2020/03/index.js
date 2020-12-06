// @ts-check
import { splitInputLines } from '../../common.js';
import { resolve } from 'path';

const map = splitInputLines(resolve('./data')).filter(Boolean).map(e=>e.split(''));

// Part 1
let posX = 0;
let treeCount = 0;
const maxPosX = map[0].length;

for (let posY = 0; posY < map.length; posY++) {
  if (map[posY][posX] === '#') treeCount += 1;
  posX = (posX + 3) % maxPosX;
}

console.log(`You will encounter ${treeCount} trees`);
