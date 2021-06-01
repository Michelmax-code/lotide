//const assertEqual = require('../assertEqual');
//const tail = require('../tail');

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3);

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns ['Pears', 'Apples', 'Lemons'] for ['Oranges', 'Pears', 'Apples', 'Lemons']", () => {
    assert.strictEqual(tail(['Oranges', 'Pears', 'Apples', 'Lemons']).length, 3);
  });
});