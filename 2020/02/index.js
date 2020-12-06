// @ts-check
import { splitInputLines } from '../../common.js';
import { resolve } from 'path';

/** @type {[number[], string, string][]} */
const database = splitInputLines(resolve('./data')).filter(Boolean).map(e => e.split(' ')).map(e => {
  return [e[0].split('-').map(Number), e[1].slice(0, -1), e[2]];
});

// Part 1
let valid = 0;

for (let entry of database) {
  const [[min, max], letter, password] = entry;

  if (password.includes(letter)) {
    const regex = new RegExp(letter, 'g');
    const matches = password.match(regex) || [];

    if (matches.length >= min && matches.length <= max) valid += 1;
  }
}

console.log(`Part 1: ${valid} passwords`);

// Part 2
valid = 0;

for (let entry of database) {
  const [[pos1, pos2], letter, password] = entry;

  if (password.includes(letter)) {
    const condition1 = password[pos1 - 1] === letter && password[pos2 - 1] !== letter;
    const condition2 = password[pos2 - 1] !== letter && password[pos1 - 1] === letter;
    if (condition1 || condition2) valid += 1;
  }
}

console.log(`Part 2: ${valid} passwords`);
