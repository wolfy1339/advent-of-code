/* eslint-disable jsdoc/valid-types */
// @ts-check
import { splitInputEmptyLines } from '../../common.js';
import { resolve } from 'path';

const passports = splitInputEmptyLines(resolve('./data')).map(e => e.replace(/\n/g, ' ').split(' ')).map(e => e.map(e => e.split(':'))).map(Object.fromEntries);


const passportRequiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

/**
 * @param {any} passport
 * @return {boolean}
 */
function hasAllRequiredFields(passport) {
  const passportFields = Object.keys(passport);
  let numberOfFieldsPresent = 0;

  passportRequiredFields.forEach(f => {
    if (passportFields.includes(f)) numberOfFieldsPresent++;
  });

  if (numberOfFieldsPresent >= passportRequiredFields.length) return true;
  return false;
}

/**
 * @param {any} passport
 * @return {boolean}
 */
function validatePassportData(passport) {
  const birthYear = passport.byr || 0;
  if (!birthYear) return false;
  const birthYearValid = birthYear >= 1920 && birthYear <= 2002;
  if (!birthYearValid) return false;

  const issueYear = passport.iyr || 0;
  if (!issueYear) return false;
  const issueYearValid = issueYear >= 2010 && issueYear <= 2020;
  if (!issueYearValid) return false;

  const expirationYear = passport.eyr || 0;
  if (!expirationYear) return false;
  const expirationYearValid = expirationYear >= 2020 && expirationYear <= 2030;
  if (!expirationYearValid) return false;

  const height = passport.hgt;
  let heightValid = false;
  if (!height) {
    return false;
  } else {
    const unit = height.slice(-2);
    const value = height.slice(0, -2);
    if (unit === 'cm') {
      heightValid = value >= 150 && value <= 193;
    } else if (unit === 'in') {
      heightValid = value >= 59 && value <= 76;
    }
  }
  if (!heightValid) return false;

  const eyeColor = passport.ecl;
  if (!eyeColor) return false;
  const eyeColorValid = eyeColor.length === 7 && eyeColor[0] === '#' && /[0-9a-f]/g.test(eyeColor.slice(1));
  if (!eyeColorValid) return false;

  const passportID = passport.pid;
  if (!passportID) return false;
  const passportIDValid = passportID.length === 9 && !/[A-Za-z]/g.test(passportID);
  if (!passportIDValid) return false;

  return birthYearValid && issueYearValid && expirationYearValid && heightValid && eyeColorValid && passportIDValid;
}

// Part 1
const validPassports = passports.filter(hasAllRequiredFields);


console.log(`Part 1: Number of valid passports ${validPassports.length}`);

// Part 2
let numValidPassports = validPassports.filter(validatePassportData).length;

console.log(`Part 2: Number of valid passports ${numValidPassports}`);
