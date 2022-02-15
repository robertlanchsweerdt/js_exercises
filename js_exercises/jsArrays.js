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

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function sumUp(a, b) {
  const filterArr = a.filter((num) => num > b);

  return filterArr.reduce((prev, curr) => prev + curr, 0);

  // alternative
  // return a.reduce((sum, cur) => {
  //   if (cur > b) return sum + cur;
  //   return sum;
  // }, 0);
}

sumUp([1, 2, 3, 4, 5, 6, 7], 2); // Expected 25
sumUp([-10, -11, -3, 1, -4], -3); // Expected 1
sumUp([78, 99, 100, 101, 401], 99); // Expected 602

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function mergeRemove(a, b) {
  const newArr = [...new Set([...a, ...b])].sort((x, y) => x - y);

  return newArr;
}

mergeRemove([1, 2, 3], [3, 4, 5]); // Expected [ 1, 2, 3, 4, 5 ]
mergeRemove([-10, 22, 333, 42], [-11, 5, 22, 41, 42]); // Expected [ -11, -10, 5, 22, 41,  42, 333]

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
function myFunction(arr, num) {
  const newArr = [...arr];
  num < 6 ? newArr.unshift(0) : newArr.unshift(num);

  return newArr;
}

myFunction([1, 2, 3], 6); // Expected [6,1,2,3]
myFunction(['a', 'b'], 2); // Expected [0,'a','b']
myFunction([null, false], 11); // Expected [11,null,false]
