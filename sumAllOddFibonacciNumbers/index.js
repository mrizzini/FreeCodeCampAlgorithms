function sumFibs(num) {
	var numFib = [1, 1]; // sets the first two Fib numbers
	var total = 0; // sets total variable
	for (var e = 0; numFib.slice(-1)[0] <= num; e++) { // sets loop that stops when last numFib is greater than num
		numFib.push((numFib[e] + numFib[e + 1])); //pushes sum of the previous two number to numFib
	}
	numFib.pop(); // deletes last numFib. For some reason my loop goes one further than it should
	for (var i = 0; i < numFib.length; i++) { //loops thru completed numFib and adds only the odd numbers
		if (numFib[i] % 2 !== 0) {
			total += numFib[i]; // sums all odd numbers and stores in total
		}
	}
	// return numFib;
	return total;
}
sumFibs(30423);
