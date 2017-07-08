let _ = require('lodash');
// abstracting the notion of errors
export function fail(message) {
  throw new Error(message);
}
export function note(message) {
  console.log(`[ NOTE: ${message} ]`)
}
export function warn(message) {
  console.log(`[ WARNING: ${message}`);
}

function parseAge(age) {
  if(!_.isString(age)) {
    // throw new Error('Expecting a string');
    fail('Expecting a string');
  }
  // console.log('attempting to parse age...');
  note('attempting to parse age...');

  let a = parseInt(age, 10);
  if(_.isNaN(a)) {
    // console.log(`could not parse age: ${age}`);
    warn(`could not parse age: ${age}`);
    a = 0;
  }
  return a;
}

let result;
// result = parseAge('42');
// console.log(result);

// result = parseAge(42);
// console.log(result);

// result = parseAge('jsldfjals');
// console.log(result);