function sumFibs(num) {
	var numFib = [1, 1];
	var total = 0;
	for (var e = 0; numFib.slice(-1)[0] <= num; e++) {
		numFib.push((numFib[e] + numFib[e + 1]));
	}
	numFib.pop();
	for (var i = 0; i < numFib.length; i++) {
		if (numFib[i] % 2 !== 0) {
			total += numFib[i];
		}
	}
	// return numFib;
	return total;
}
sumFibs(10);
