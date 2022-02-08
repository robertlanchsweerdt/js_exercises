function numbersSum(numArray) {
  let sum = 0;

  numArray.forEach((num) => (sum += num));

  return sum;
}

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function mathCompute(a, b, c, d, e, f) {
  return ((a + b - c) * d) / e ** f;
}

console.log(numbersSum([1, 2, 3]));
console.log(numbersSum([14, 2, 0]));
console.log(numbersSum([20, 43, 12, 100]));

mathCompute(6, 5, 4, 3, 2, 1);
mathCompute(6, 2, 1, 4, 2, 3);
