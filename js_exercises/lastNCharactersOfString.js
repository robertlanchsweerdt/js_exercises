// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str) {
  const lastThree = str.slice(-3);
  return lastThree;
}

myFunction('abcdefg'); // Expected 'efg'
myFunction('1234'); // Expected '234'
myFunction('fgedcba'); // Expected 'cba'

// Remove the last 3 characters from the string

function myFunction(str) {
  return str.slice(0, -3);
}

myFunction('abcdefg'); // Expected 'abcd'
myFunction('1234'); // Expected '1'
myFunction('fgedcba'); // Expected 'fged'
