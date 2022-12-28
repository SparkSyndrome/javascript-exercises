const reverseString = function(str) {
  let reversed = "";
  for (i = str.length - 1; reversed.length < str.length; i--) {
    reversed += str[i];
  }
  return reversed
};

// Do not edit below this line
module.exports = reverseString;
