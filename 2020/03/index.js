// @ts-check
import { splitInputLines } from '../../common.js';
import { resolve } from 'path';

const map = splitInputLines(resolve('./data')).filter(Boolean).map(e=>e.split(''));
const maxPosX = map[0].length; // map width

/**
 * @param {number} slopeX
 * @param {number} slopeY
 * @return {number}
 */
function calculateTreesEncountered(slopeX, slopeY) {
  let posX = 0;
  let treeCount = 0;

  for (let posY = 0; posY < map.length; posY += slopeY) {
    if (map[posY][posX] === '#') treeCount += 1;
    posX = (posX + slopeX) % maxPosX;
  }

  return treeCount;
}


// Part 1
console.log(`Part 1: You will encounter ${calculateTreesEncountered(3, 1)} trees`);
