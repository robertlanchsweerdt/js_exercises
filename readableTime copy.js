function formatDuration(seconds) {
  // establish units of time
  const oneMinute = 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneYear = oneDay * 365;

  // compute seconds into time units and store in an object
  const timeObj = {
    years: Math.floor(seconds / oneYear),
    days: Math.floor((seconds % oneYear) / oneDay),
    hours: Math.floor((seconds % oneDay) / oneHour),
    minutes: Math.floor((seconds % oneHour) / oneMinute),
    seconds: Math.floor(seconds % oneMinute),
  };

  // iterate over object and place each time unit sentence into an array
  let englishOutput = '';
  const convertToArray = Object.entries(timeObj);

  for (let i = 0; i < convertToArray.length; i++) {
    // set variables
    let currentKey = convertToArray[i][0];
    let currentValue = convertToArray[i][1];
    let nextValue = null;
    let nextIteration = null;

    // set conditional variables if not undefined
    if (typeof convertToArray[i + 1] != 'undefined') {
      nextIteration = convertToArray[i + 1];
      nextValue = convertToArray[i + 1][1];
    }

    // remove 's' from time units if measure is '1
    if (currentValue >= 1) {
      englishOutput += `${currentValue} ${
        currentValue > 1
          ? currentKey
          : currentKey.slice(0, currentKey.length - 1)
      }`;

      if (nextIteration && nextValue !== 0 && i === convertToArray.length - 2) {
        englishOutput += ' and ';
      } else if (nextIteration && nextValue !== 0) {
        englishOutput += ', ';
      }
    }
  }

  return englishOutput;
}

console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
console.log(formatDuration(76562345));
console.log(formatDuration(76123440));
