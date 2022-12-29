const removeFromArray = function(arr, toBeRemoved) {
  const indexToRemove = arr.indexOf(toBeRemoved);
  arr.splice(indexToRemove, 1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
