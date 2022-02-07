function formatDuration(seconds) {
  if (seconds === 0) return 'now';

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
  const englishArray = [];
  let englishOutput = '';
  const convertToArray = Object.entries(timeObj);

  for (let i = 0; i < convertToArray.length; i++) {
    // set variables
    let currentKey = convertToArray[i][0];
    let currentValue = convertToArray[i][1];

    // remove 's' from time units if measure is '1
    if (currentValue >= 1) {
      englishOutput = `${currentValue} ${
        currentValue > 1
          ? currentKey
          : currentKey.slice(0, currentKey.length - 1)
      }`;

      englishArray.push(englishOutput);
    }
  }

  // add punctation / 'and' to proper syntax positioning
  // to create a proper sentence
  if (englishArray.length === 1) {
    return englishArray.join(' ');
  } else if (englishArray.length === 2) {
    englishArray[0] += ' and ';
  } else {
    for (let i = 0; i < englishArray.length; i++) {
      // if 2nd to last item in array, add 'and' to the word
      if (englishArray.indexOf(englishArray[i]) === englishArray.length - 2) {
        englishArray[i] += ' and ';
        // add a comma if more than 2 words
        // do not add a comma to the second to last word
      } else if (
        englishArray.indexOf(englishArray[i]) !==
        englishArray.length - 1
      ) {
        englishArray[i] += ', ';
      }
    }
  }

  sendOutput = englishArray.join('');

  return sendOutput;
}

console.log(formatDuration(0));
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
console.log(formatDuration(76562345));
console.log(formatDuration(76123440));
