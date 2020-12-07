import { splitInputEmptyLines } from '../../common.js';
import { resolve } from 'path';

// First level Arrays are groups (data imput)
// Second level are individuals witin a group (e.split('\n') output)
const forms = splitInputEmptyLines(resolve('./data')).map(e => e.split('\n'));

// Part 1
let numberQuestions = forms.map(e => {
  const set = new Set();

  e.flatMap(e => e.split('')).forEach(f => set.add(f));

  return set.size;
}).reduce((prev, curr) => prev + curr);

console.log(numberQuestions);

// Part 2
numberQuestions = forms.map(e => {
  const num = e.length;
  const set = new Set();

  const q = e.flatMap(e => e.split('')).reduce((p, c) => p.concat(c));

  for (let i of q) {
    if (Array.from(q.matchAll(new RegExp(i, 'g'))).length === num) {
      set.add(i);
    }
  }
  return set.size;
}).reduce((prev, curr) => prev + curr);

console.log(numberQuestions);
