import { splitInputEmptyLines } from '../../common.js';
import { resolve } from 'path';

// First level Arrays are groups (data imput)
// Second level are individuals witin a group (e.split('\n') output)
const forms = splitInputEmptyLines(resolve('./data')).map(group => group.split('\n').filter(Boolean).map(person => person.split('')));

// Part 1
let numberQuestions = forms.map(group => {
  const set = new Set();

  group.forEach(person => {
    person.forEach(answer => set.add(answer));
  });

  return set.size;
}).reduce((prev, curr) => prev + curr);

console.log(numberQuestions);

// Part 2
numberQuestions = forms.map(group => {
  return group.reduce((acc, person) => {
    const set = new Set(acc);
    const result = [];
    person.forEach(answer => {
      if (set.has(answer)) result.push(answer);
    });
    return result;
  }).length;
}).reduce((prev, curr) => prev + curr);

console.log(numberQuestions);
