let _ = require('lodash');

function unsplat(fn) {
  return function() {
    return fn.call(null, _.toArray(arguments));
  };
};

let joinElements = unsplat(array => array.join(' '));
console.log(joinElements(1, 2, 3, 4, 5));
console.log(joinElements('#', '1', '$', '%', '*'));