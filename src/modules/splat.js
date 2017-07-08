function splat(fn) {
  return function(arg) {
    return fn.apply(null, arg);
  }
}

let addArray = splat((x, y) => x + y );
console.log(addArray([1, 2]));

let multiArray = splat((x, y) => x * y);
console.log(multiArray([10, 40]));
