const sumAll = function(min, max) {
  let sum = 0;
  if (min > max) {
    for (i = max; i <= min; i++) {
      sum += i;
    }
    return sum;
  } else {
    for (i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
