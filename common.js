// @ts-check
import { readFileSync } from 'fs';

/**
 * Returns the contents of a file split line by line
 * @param {string} path Path of the file to read
 * @return {string[]}
 */
export function splitInputLines(path) {
  return readFileSync(path).toString().split('\n').filter(Boolean);
}

/**
 * Returns the contents of a file split by empty lines
 * @param {string} path Path of the file to read
 * @return {string[]}
 */
export function splitInputEmptyLines(path) {
  return readFileSync(path).toString().split(/\n{2,}/).filter(Boolean);
}
