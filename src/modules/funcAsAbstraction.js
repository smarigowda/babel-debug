let _ = require('lodash');

// abstracting the notion of errors

function fail(message) {
  throw new Error(message);
}

function parseAge(age) {
  if(!_.isString(age)) {
    // throw new Error('Expecting a string');
    fail('Expecting a string');
  }
  console.log('attempting to parse age...');
  let a = parseInt(age, 10);
  if(_.isNaN(a)) {
    console.log(`could not parse age: ${age}`);
    a = 0;
  }
  return a;
}

// let result = parseAge('42');
// console.log(result);

result = parseAge(42);
console.log(result);

// result = parseAge('jsldfjals');
// console.log(result);