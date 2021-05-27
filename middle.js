const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let value = 0; value < array1.length; value += 1) {
    if (array1[value] !== array2[value]) {
      return false;
    }
  }
  return true;
};
// eslint-disable-next-line no-unused-vars
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};
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
console.log(middle([1, 2, 3, 4]));  // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]