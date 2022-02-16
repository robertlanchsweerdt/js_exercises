// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction(a, b) {
  return a.toString() < b.toString();
}

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')); // Expected true
myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')); // Expected false
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')); // Expected false

// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
function addDaysToDate(a, b) {
  return a.setDate(a.getDate() + b);
}

addDaysToDate(new Date(Date.UTC(2000, 01, 01)), 31); // Expected 952041600000
addDaysToDate(new Date(Date.UTC(2000, 01, 01)), 10); // Expected 950227200000
addDaysToDate(new Date(Date.UTC(2000, 02, 28)), 2); // Expected 954374400000

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function compareDates(a, b) {
  return a.toString() === b.toString();
}

compareDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')); // Expected false
compareDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')); // Expected true
compareDates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')); // Expected false

// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
function dateDiff(a, b) {
  const oneMillisecond = 1000; // 1000 milliseconds in a second
  const oneMinute = 60; // 60 seconds in a minute

  const timeDiff = b.getTime() - a.getTime();
  const dayDiff = timeDiff / (oneMillisecond * oneMinute);

  const anotherWay = Math.floor(timeDiff / oneMillisecond / oneMinute);

  return dayDiff <= 60;
}

dateDiff(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')); // Expected true
dateDiff(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')); // Expected true
dateDiff(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')); // Expected false
dateDiff(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')); // Expected true
