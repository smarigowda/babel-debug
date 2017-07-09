function lessThan(x, y) {
  return x < y;
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

let sorted = [2, 3, -1, -6, 0, -108, 42, 10].sort(comparator(lessThan));

console.log(sorted);