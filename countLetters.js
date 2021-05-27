const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(string) {
  let opString = string.split(' ').join('');
  let result = {};
  for (let eachLetter of opString) {
    if (result[eachLetter]) {
      result[eachLetter] += 1;
    } else {
      result[eachLetter] = 1;
    }
  } return result;
};
console.log(countLetters("lighthouse in the house"));
