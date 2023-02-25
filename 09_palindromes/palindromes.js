const palindromes = function (str) {
  // Strip all non-alphabetic characters & whitespace, convert all chars to lowercase
  const stripStr = str.replace(/\W+/g, "").toLowerCase();
  // Convert stripped string to array, reverse the array, and convert back to string
  const reverseStripStr = stripStr.split("").reverse().join("");

  // Check if stripped string is palindrome w/ the reversed stripped string
  if (stripStr === reverseStripStr) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
