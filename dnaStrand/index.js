function pairElement(str) {
	var dnaStrand = [];
	// sets dnaStrand variable to an empty array
	var newArray = str.split("");
	//splits up str into an array of characters
	
	// the following for loops checks the first letter of the array (which was the string), 
	// and based on the letter, creates a pair. then pushes the pair to the dnaStrand array
	// then it goes to the next letter of the array using the i, and repeats
	for (var i = 0; i < str.length; i++) {
		//   var firstLetter = newArray[i];
		console.log(newArray[i]);
		if (newArray[i] === "G") {
			var pair = ["G", "C"];
			//     dnaStrand.push(pair);
		} else if (newArray[i] === "C") {
			var pair = ["C", "G"];
			//     dnaStrand.push(pair);
		} else if (newArray[i] === "T") {
			var pair = ["T", "A"];
			//     dnaStrand.push(pair);
		} else if (newArray[i] === "A") {
			var pair = ["A", "T"];
			//     dnaStrand.push(pair);
		}
		dnaStrand.push(pair);
	}
	return dnaStrand;
	//this returns the completed dnaStrand array
}
pairElement("CGC");


// Step 1 - split input into a char array

// Step 2 - get first character = firstChar

// Step 3 - check if firstChar is G
// 		Create pair [G, C]
// Step 4 - else if firstChar is C
// 		Create pair [C, G]
// Step 5 - else if firstChar is T
// 		Create pair [T, A]
// Step 6 - else if firstChar is A
// 		Create pair [A, T]
// End if

// Step 7 - push to dna strand (the encompassing array)

// Step 8 - repeat step 3 for additional chars

// Step 9 - return dna strand

// Make sure it works for one DNA pair first, then create the loop

