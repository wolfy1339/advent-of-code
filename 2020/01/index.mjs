import { readFileSync } from 'fs';

const data = readFileSync('./data').toString().split('\n').filter(Boolean).map(Number);

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
