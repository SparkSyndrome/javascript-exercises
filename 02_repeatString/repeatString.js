const repeatString = function(str, numRepeats) {
  let repeatedString = "";
  while (numRepeats > 0) {
    repeatedString += str;
    numRepeats--;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
