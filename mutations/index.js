function mutation(arr) {
	arr[0] = arr[0].toLowerCase(); // turns arr 0 into lowercase
	arr[1] = arr[1].toLowerCase(); //turns arr 1 into lowercase and splits 
	var doesExist = ""; // creates variable to check if character in arr 1 exists in arr 0
	for (var i = 0; i < arr[1].length; i++) { // creates loop equals to length of arr 1
		if (arr[0].indexOf(arr[1][i]) === -1) { // checks to see if each character in arr 1 exists in arr 0. if it returns -1, then it does not exist.
			doesExist = false;
			break; // if this occurs, the loop ends, because it does not exist
		} else {
			doesExist = true; // if it does not equal -1, it sets to true 
		}
	}
	return doesExist;
}
mutation(["hello", "hey"]);