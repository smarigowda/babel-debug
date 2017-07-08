import { fail, note, warn } from './funcAsAbstraction'
let letters = ['a', 'b', 'c'];

function nth(array, index) {
  return array[index];
}

function isIndexed(data) {
  return _.isArray(data) || _.isString(data);
}

console.log(nth(letters, 1));
console.log(nth({}, 1));
