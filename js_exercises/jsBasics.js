// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function createSentence(a, b) {
  return a.includes(b) ? b + a : a + b;
}

createSentence('cheese', 'cake'); // Expected 'cheesecake'
createSentence('lips', 's'); // Expected 'slips'
createSentence('Java', 'script'); // Expected 'Javascript'
createSentence(' think, therefore I am', 'I'); // Expected 'I think, therefore I am'

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function countArg(a, b) {
  return b.split('').filter((letter) => letter === a).length;

  // alternative
  // return b.split(a).length - 1
}

countArg('m', 'how many times does the character occur in this sentence?'); // Expected 2
countArg('h', 'how many times does the character occur in this sentence?'); // Expected 4
countArg('?', 'how many times does the character occur in this sentence?'); // Expected 1
countArg('z', 'how many times does the character occur in this sentence?'); // Expected 0

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function wholeNum(a) {
  return a % 1 === 0;
}

wholeNum(4); // Expected true
wholeNum(1.123); // Expected false
wholeNum(1048); //  Expected true
wholeNum(10.48); // Expected false
