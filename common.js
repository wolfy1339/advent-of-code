// @ts-check
import { readFileSync } from 'fs';

/**
 * Returns the contents of a file split line by line
 * @param {string} path Path of the file to read
 * @return {string[]}
 */
export function splitInputLines(path) {
  return readFileSync(path).toString().split('\n');
}
