// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction(str) {
  const firstHalf = str.slice(0, str.length / 2);
  return firstHalf;
}

myFunction('abcdefgh'); // Expected 'abcd'
myFunction('1234'); // Expected '12'
myFunction('gedcba'); // Expected 'ged'
