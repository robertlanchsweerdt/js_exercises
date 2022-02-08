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
