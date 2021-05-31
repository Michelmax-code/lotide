// eslint-disable-next-line no-unused-vars
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

// test code
//assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
module.exports = assertArraysEqual;