const convertToCelsius = function(fahrenheitNum) {
  const celsiusNum = (fahrenheitNum - 32) * (5/9);
  const roundedCelsiusNum = Math.round(celsiusNum * 10) / 10;
  return roundedCelsiusNum;
};

const convertToFahrenheit = function(celsiusNum) {
  const fahrenheitNum = celsiusNum * (9 / 5) + 32;
  const roundedFahrenheitNum = Math.round(fahrenheitNum * 10) / 10;
  return roundedFahrenheitNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
