function ascending(x, y) {
  return x < y;
}

function descending(x, y) {
  return y < x;
}

function comparator(predicate) {
  return function(x, y) {
    if(predicate(x, y)) {
      return -1;
    } else if(predicate(y, x)) {
      return 1;
    } else {
      return 0;
    }
  }
}

let sorted;
sorted = [2, 3, -1, -6, 0, -108, 42, 10].sort(comparator(ascending));
// sorted = [2, 3, -1, -6, 0, -108, 42, 10].sort(comparator(descending));

console.log(sorted);