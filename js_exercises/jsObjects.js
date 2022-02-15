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

myFunction({ a: 1, b: 2, c: 3 }, 'b'); // Expected true
myFunction({ x: 'a', y: 'b', z: 'c' }, 'a'); // Expected false
myFunction({ x: 'a', y: 'b', z: 'c' }, 'z'); // Expected true

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function createObj(a, b) {
  return { [a]: b };
}

createObj('a', 'b'); // Expected {a:'b'}
createObj('z', 'x'); // Expected {z:'x'}
createObj('b', 'w'); // Expected {b:'w'}

function createObjTwo(a, b) {
  let someObj = {};

  a.forEach((ele, index) => {
    someObj[ele] = b[index];
  });

  // alternate
  // return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});

  return someObj;
}

createObjTwo(['a', 'b', 'c'], [1, 2, 3]); // Expected {a:1,b:2,c:3}
createObjTwo(['w', 'x', 'y', 'z'], [10, 9, 5, 2]); // Expected {w:10,x:9,y:5,z:2}
createObjTwo([1, 'b'], ['a', 2]); // Expected {1:'a',b:2}

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function returnObjKey(obj, key) {
  return obj[key];
}

returnObjKey({ continent: 'Asia', country: 'Japan' }, 'continent'); // Expected 'Asia'
returnObjKey({ country: 'Sweden', continent: 'Europe' }, 'country'); //  Expected 'Sweden'

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
function filterObj(obj) {
  console.log(delete obj.b);
  return obj;

  // alternative
  // const { b, ...rest } = obj;
  // return rest;
}

filterObj({ a: 1, b: 7, c: 3 }); // Expected { a: 1, c: 3 }
filterObj({ b: 0, a: 7, d: 8 }); // Expected { a: 7, d: 8 }
filterObj({ e: 6, f: 4, b: 5, a: 3 }); // Expected { e: 6, f: 4, a: 3 }

// Write a function that takes an object (a) as argument
// Return the sum of all object values
function sumObjValues(obj) {
  return Object.values(obj).reduce((prev, curr) => prev + curr, 0);
}

sumObjValues({ a: 1, b: 2, c: 3 }); // Expected 6
sumObjValues({ j: 9, i: 2, x: 3, z: 4 }); // Expected 18
sumObjValues({ w: 15, x: 22, y: 13 }); // Expected 50

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor
function returnArg(obj) {
  return obj['prop-2'];
}

returnArg({ one: 1, 'prop-2': 2 }); // Expected 2
returnArg({ 'prop-2': 'two', prop: 'test' }); // Expected 'two'

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function roundNum(a) {
  return Math.round((a + Number.EPSILON) * 100) / 100;

  // alternate
  //return Number(a.toFixed(2));
}

roundNum(2.12397); // Expected 2.12
roundNum(3.136); // Expected 3.14
roundNum(1.12397); // Expected 1.12
roundNum(26.1379); // Expected 26.14

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
function sortObj(arr) {
  const sorted = arr.sort((first, second) => {
    return first.b - second.b;
  });

  return sorted;
}

sortObj([
  { a: 1, b: 2 },
  { a: 5, b: 4 },
]); // Expected [{a:1,b:2},{a:5,b:4}]
sortObj([
  { a: 2, b: 10 },
  { a: 5, b: 4 },
]); // Expected [{a:5,b:4},{a:2,b:10}]
sortObj([
  { a: 1, b: 7 },
  { a: 2, b: 1 },
]); // Expected [{a:2,b:1},{a:1,b:7}]

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
function mutateObj(arr, str) {
  const newObj = arr.map((obj) => {
    return { ...obj, continent: str };
  });

  return newObj;
}

mutateObj(
  [
    { city: 'Tokyo', country: 'Japan' },
    { city: 'Bangkok', country: 'Thailand' },
  ],
  'Asia'
); // Expected [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
mutateObj(
  [
    { city: 'Stockholm', country: 'Sweden' },
    { city: 'Paris', country: 'France' },
  ],
  'Europe'
); // Expected [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
function mergeCorrect(x, y) {
  const newObj = {};
  newObj.d = y.b;
  delete y.b;

  return { ...x, ...y, ...newObj };

  // alternate
  // const { b, ...rest } = y;
  // return { ...x, ...rest, d: b };
}

mergeCorrect({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }); // Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
mergeCorrect({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }); // Expected { a: 5, b: 4, c: 3, e: 2, d: 1}
