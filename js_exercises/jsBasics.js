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
