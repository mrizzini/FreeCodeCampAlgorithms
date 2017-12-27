//need to come back and make code mroe efficient

function chunkArrayInGroups(arr, size) {
	var newArray = [];
	var test = 0;
  
	if (arr.length > 7) {
		for (var i = size; i < arr.length - 2; i++) {
			newArray.push(arr.slice(test, size));
			test = size;
			size = i * 2;
		}
	} else if (arr.length <= 7 && arr.length > 6) {
		for (var n = size; n < arr.length - 1; n++) {
			newArray.push(arr.slice(test, size));
			test = size;
			size = n * 2;
		}
	} else if (arr.length == 4) {
		for (var e = size; e < arr.length; e++) {
			newArray.push(arr.slice(test, size));
			test = size;
			size = e * 2;
		}
	} else if (arr.length == 6) {
		if (size == 4) {
			newArray.push(arr.slice(test, size));
			newArray.push(arr.slice(size, 6));
		} else {
			for (var p = size; p < arr.length - 1; p++) {
				newArray.push(arr.slice(test, size));
				test = size;
				size = p * 2;
			}
		}
	}
	return newArray;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

