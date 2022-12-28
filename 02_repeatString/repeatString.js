const repeatString = function(str, numRepeats) {
  let repeatedString = "";
  if (numRepeats < 0) {
    return 'ERROR'
  } else {
    while (numRepeats > 0) {
      repeatedString += str;
      numRepeats--;
    }
    return repeatedString;
  }
};

// Do not edit below this line
module.exports = repeatString;
