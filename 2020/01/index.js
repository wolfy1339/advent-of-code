// @ts-check
import { splitInputLines } from '../../common.js';
import { resolve } from 'path';

const data = splitInputLines(resolve('./data')).filter(Boolean).map(Number);

// Part 1
for (let v of data) {
  const num1 = v;
  let done;

  for (let e of data) {
    let num2 = e;

    if (num1 + num2 === 2020) {
      console.log(num1 * num2);
      done = true;
      break;
    }
  }
  if (done) break;
}

// Part 2
for (let v of data) {
  const num1 = v;
  let done;

  for (let e of data) {
    let num2 = e;

    for (let n of data) {
      const num3 = n;

      if (num1 + num2 + num3 === 2020) {
        console.log(num1 * num2 * num3);
        done = true;
        break;
      }
    }
    if (done) break;
  }
  if (done) break;
}
