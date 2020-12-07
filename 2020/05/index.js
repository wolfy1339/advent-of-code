// @ts-check
import { splitInputLines } from '../../common.js';
import { resolve } from 'path';

const boardingPasses = splitInputLines(resolve('./data')).filter(Boolean).map(b => b.split(''));

/**
 * @param {any[]} boardingPass
 * @return {number}
 */
function getSeatRow(boardingPass) {
  let min = 0;
  let max = 127;
  boardingPass.slice(0, -3).forEach(v => {
    if (v === 'F') {
      max = Math.floor((min + max) / 2); // Lower range
    } else if (v === 'B') {
      min = Math.ceil((min + max) / 2); // Upper range
    }
  });

  return max;
}


/**
 * @param {any[]} boardingPass
 * @return {number}
 */
function getSeatColumn(boardingPass) {
  let min = 0;
  let max = 7;

  boardingPass.slice(-3).forEach(v => {
    if (v === 'L') {
      max = Math.floor((min + max) / 2); // Lower range
    } else if (v === 'R') {
      min = Math.ceil((min + max) / 2); // Upper range
    }
  });

  return max;
}

const seatIDs = boardingPasses.map(v => {
  const row = getSeatRow(v);
  const col = getSeatColumn(v);
  return row * 8 + col;
});

// Part 1
console.log(`Highest seat ID: ${Math.max(...seatIDs)}`);

