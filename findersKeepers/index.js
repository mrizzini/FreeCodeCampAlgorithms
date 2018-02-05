
function findElement(arr, func) {
  var passed = arr.filter(func); // stores all numbers that passed the test, into an array
  return passed[0]; // returns the first number that passes the test. and if none exist, returns undefined
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });