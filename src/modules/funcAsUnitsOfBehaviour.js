import { fail, note, warn } from './funcAsAbstraction'
let _ = require('lodash');
let letters = ['a', 'b', 'c'];

function isIndexed(data) {
  return _.isArray(data) || _.isString(data);
}

function nth(array, index) {
  if(!_.isNumber(index)) {
    fail('index should be a number');
  }
  if(!isIndexed(array)) {
    fail('not supported on non indexed type');
  }
  
  if(index < 0 || index >= array.length) {
    fail('index value is out of bounds');
  }
  return array[index];
}

function second(array) {
  return nth(array, 1);
}

// console.log(nth(letters, 1));
// console.log(nth({}, 1));
// console.log(nth(letters, 'w'));
// console.log(nth({}, 1));
// console.log(nth([1, 2, 3, 4, 5], 1));
// console.log(nth([1, 2, 3, 4, 5], 100));

// console.log(second(letters));
console.log(second(['a', 'b']));
console.log(second('fogus'));
console.log(second({}));