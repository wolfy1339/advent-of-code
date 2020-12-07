// @ts-check
import { splitInputLines } from '../../common.js';
import { resolve } from 'path';

const map = splitInputLines(resolve('./data')).map(e=>e.split(''));
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

// Part 2
const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
let multipliedTotals = 1;

for (let slope of slopes) {
  const [slopeX, slopeY] = slope;
  const treeCount = calculateTreesEncountered(slopeX, slopeY);
  multipliedTotals *= treeCount;

  console.log(`Part 2: You will encounter ${treeCount} trees with a slope of ${slope}`);
}

console.log(`Part 2: When you multiply the values together, you get ${multipliedTotals}`);
