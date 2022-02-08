// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function filterArr(a, b) {
  return a.filter((ele) => ele !== b);
}

filterArr([1, 2, 3], 2); // Expected [1, 3]
// filterArr([1,2,'2'], '2') //  Expected [1, 2]
// filterArr([false,'2',1], false) //  Expected ['2', 1]
// filterArr([1,2,'2',1], 1) // Expected [2, '2']
