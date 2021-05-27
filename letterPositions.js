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
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};
const letterPositions = function(sentence) {
  const remSpace = sentence.split('');
  const results = {};
  remSpace.forEach(function(letter, index) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  });
  return results;
};

assertArraysEqual(letterPositions('hello').e, [1]);