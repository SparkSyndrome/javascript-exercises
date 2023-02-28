const fibonacci = function(num) {
  const fibNums = [1, 1];
  let nextNum;

  for (let i = 0; i < num; i++) {
    nextNum = fibNums[i] + fibNums[i + 1];
    fibNums.push(nextNum);
  }

  if (num >= 0) {
    return fibNums[num - 1];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
