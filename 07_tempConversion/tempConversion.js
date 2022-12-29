const convertToCelsius = function(fahrenheitNum) {
  const celsiusNum = (fahrenheitNum - 32) * (5/9);
  const roundedCelsiusNum = Math.round(celsiusNum * 10) / 10;
  return roundedCelsiusNum;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
