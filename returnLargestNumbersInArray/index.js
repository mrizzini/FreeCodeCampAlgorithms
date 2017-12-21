function largestOfFour(arr) {
	var largest = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][0] > arr[i][1]) {
			var largestOfArray = arr[i][0];
		} else {
			largestOfArray = arr[i][1];
		}
		if (largestOfArray > arr[i][2]) {
			console.log("moving on");
		} else {
			largestOfArray = arr[i][2];
		}
		if (largestOfArray > arr[i][3]) {
			console.log("moving on again");
		} else {
			largestOfArray = arr[i][3];
		}
		largest.push(largestOfArray);
	}
	return largest;
}

largestOfFour([[4333, 232, 10, 300], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Input -  Four sub arrays in one array. Each array contains 4 numbers.

// Output - One array consisting of the largest number in each sub array


// Solution-


// Example

// Input: ([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// Output: [5, 27,39, 1001]



// Step 1 - Start with first sub array and access each number 

// Step 2- check if first number is greater than second number

// Step 3- if it is, push to var largest = []

// Step 4- else, go to next number and store second number in largest

// Step 5 - repeat for each sub array

// Step 6- return array of largest
