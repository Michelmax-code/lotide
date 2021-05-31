const eqArrays = require('./eqArrays');
// eslint-disable-next-line no-unused-vars
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};
//test code
//console.log(middle([1, 2, 3, 4]));  // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;