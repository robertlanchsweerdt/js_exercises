// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(arg) {
  let count = 0;
  arg.forEach((num) => {
    if (num < 0) count++;
  });
  return count;
}

// alternate solution

function myFunction(a) {
  return a.filter((el) => el < 0).length;
}

myFunction([1, -2, 2, -4]); // Expected 2
myFunction([0, 9, 1]); // Expected 0
myFunction([4, -3, 2, 1, 0]); // Expected 1
