// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
function myFunction(a, b) {
  let objectHasProperty = false;

  Object.keys(a).forEach((key) => {
    if (key === b) objectHasProperty = true;
  });

  return objectHasProperty;
}

// Write a function that takes an object (a) as argument
// Return an array with all object keys
function myFunction(a) {
  return Object.keys(a);
}

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function createObj(a, b) {
  return { [a]: b };
}

myFunction({ a: 1, b: 2, c: 3 }, 'b'); // Expected true
myFunction({ x: 'a', y: 'b', z: 'c' }, 'a'); // Expected false
myFunction({ x: 'a', y: 'b', z: 'c' }, 'z'); // Expected true

createObj('a', 'b'); // Expected {a:'b'}
createObj('z', 'x'); // Expected {z:'x'}
createObj('b', 'w'); // Expected {b:'w'}
