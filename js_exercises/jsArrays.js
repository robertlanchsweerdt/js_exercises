// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function filterArr(a, b) {
  return a.filter((ele) => ele !== b);
}

filterArr([1, 2, 3], 2); // Expected [1, 3]
filterArr([1, 2, '2'], '2'); //  Expected [1, 2]
filterArr([false, '2', 1], false); //  Expected ['2', 1]
filterArr([1, 2, '2', 1], 1); // Expected [2, '2']

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function returnEle(a, n) {
  return a.slice(-n);
}

returnEle([1, 2, 3, 4, 5], 2); // Expected [ 4, 5 ]
returnEle([1, 2, 3], 6); // Expected [ 1, 2, 3 ]
returnEle([1, 2, 3, 4, 5, 6, 7, 8], 3); // Expected [ 6, 7, 8 ]

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function sortDesc(arr) {
  return arr.sort((firstEl, secondEl) => secondEl - firstEl);
}

sortDesc([1, 3, 2]); // Expected [3,2,1]
sortDesc([4, 2, 3, 1]); // Expected [4,3,2,1]

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function average(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

average([10, 100, 40]); // Expected 50
average([10, 100, 1000]); // Expected 370
average([-50, 0, 50, 200]); // Expected 50

// Write a function that takes an array of strings as argument
// Return the longest string
function longestStr(arr) {
  let currentLongestStr = '';

  arr.forEach((word) => {
    if (word.length > currentLongestStr.length) currentLongestStr = word;
  });

  return currentLongestStr;

  // alternate
  // return arr.reduce((a, b) => a.length <= b.length ? b : a)
}

longestStr(['help', 'me']); // Expected 'help'
longestStr(['I', 'need', 'candy']); // Expected 'candy'

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function mergeArrays(...arrays) {
  return [].concat(...arrays);

  // alternate
  // return arrays.flat()
}

mergeArrays([1, 2, 3], [4, 5, 6]); // Expected [1, 2, 3, 4, 5, 6]
mergeArrays(['a', 'b', 'c'], [4, 5, 6]); // Expected ['a', 'b', 'c', 4, 5, 6]
mergeArrays([true, true], [1, 2], ['a', 'b']); // Expected [true, true, 1, 2, 'a', 'b']

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function checkArray(arr) {
  return arr.every((val) => val === arr[0]);

  // alternate
  // return new Set(arr).size === 1
}

checkArray([true, true, true, true]); // Expected true
checkArray(['test', 'test', 'test']); // Expected true
checkArray([1, 1, 1, 2]); // Expected false
checkArray(['10', 10, 10, 10]); // Expected false
