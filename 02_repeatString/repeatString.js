let repeatedString = "";

const repeatString = function(str, numRepeats) {
  while (numRepeats > 0) {
    repeatedString += str;
    numRepeats--;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
