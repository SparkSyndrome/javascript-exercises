const removeFromArray = function(arr, ...toBeRemoved) {
  let indexToRemove;
  toBeRemoved.forEach((el) => {
    indexToRemove = arr.indexOf(el);
    arr.splice(indexToRemove, 1);
  })
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
