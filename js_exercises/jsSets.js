// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
function setValue(set, val) {
  return set.has(val);
}

// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
function convertSet(set) {
  return [...set];
}

setValue(new Set([1, 2, 3]), 2); // Expected true
setValue(new Set([123]), 2); // Expected false
setValue(new Set(['1', '2', '3']), '2'); // Expected true
setValue(new Set('123'), '2'); // Expected true

convertSet(new Set([1, 2, 3])); // Expected [1, 2, 3]
convertSet(new Set([123])); // Expected [123]
convertSet(new Set(['1', '2', '3'])); // Expected ['1', '2', '3']
convertSet(new Set('123')); // Expected ['1', '2', '3']
