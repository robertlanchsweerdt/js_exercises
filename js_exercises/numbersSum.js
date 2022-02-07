function numbersSum(numArray) {
  let sum = 0;

  numArray.forEach((num) => (sum += num));

  return sum;
}

console.log(numbersSum([1, 2, 3]));
console.log(numbersSum([14, 2, 0]));
console.log(numbersSum([20, 43, 12, 100]));
