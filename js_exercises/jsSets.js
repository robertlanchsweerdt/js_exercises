// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
function setValue(set, val) {
  return set.has(val);
}

setValue(new Set([1, 2, 3]), 2); // Expected true
setValue(new Set([123]), 2); // Expected false
setValue(new Set(['1', '2', '3']), '2'); // Expected true
setValue(new Set('123'), '2'); // Expected true

// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
function convertSet(set) {
  return [...set];
}

convertSet(new Set([1, 2, 3])); // Expected [1, 2, 3]
convertSet(new Set([123])); // Expected [123]
convertSet(new Set(['1', '2', '3'])); // Expected ['1', '2', '3']
convertSet(new Set('123')); // Expected ['1', '2', '3']

// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
function createSet(a, b, c) {
  let mySet = [a, b, c];
  return new Set(mySet);
}

createSet(1, 'b', 3); // Expected new Set([1, 'b', 3])
createSet(NaN, null, false); // Expected new Set([NaN, null, false])
createSet('a', ['b'], { c: 3 }); // Expected new Set(['a', ['b'], { c: 3 }])

// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
function removeVal(set, val) {
  console.log(set);

  return [...set].filter((value) => value !== val);
}

removeVal(new Set([1, 2, 3]), 1); // Expected new Set([2, 3])
removeVal(new Set('12345'), '3'); // Expected new Set(['1', '2', '4', '5'])
removeVal(new Set([1, 2, 3]), 4); // Expected new Set([1, 2, 3])
