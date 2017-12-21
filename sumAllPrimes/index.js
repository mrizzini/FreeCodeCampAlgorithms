  // Check numbers 2 through input -1
// 	Check if this input is divisible by number
// 		Not prime (return false)
// 	If not divisible
// 		Repeat with next number

// Is prime (return true)


// Running total = 0
// Start with number 2 up to including 10
// 	Check if Prime
// 		Add number to running total
// 		Repeat with next number
// 	Else not prime
// 		Repeat with next number
// Return running total




function isPrime (num) {
  for (var n = 2; n < num; n++) {
    if (num % n == 0) {
      return false;
    }
  }
  return true;
}


function sumPrimes(num) {
  var total = 2;
  
  for (var n = 3; n <= num; n++) {
    if (isPrime(n)) {
        total += n;
        } 
  } 

  return total;
}

console.log("2", isPrime(2));
console.log("5", isPrime(5));
console.log("16", isPrime(16));
console.log("9", isPrime(9));

sumPrimes(977);