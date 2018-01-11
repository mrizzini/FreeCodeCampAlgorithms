function diffArray(arr1, arr2) {
	var different = [];
	if (arr1.length == 0) {
		return arr2;
	}
	if (arr2.length == 0) {
		return arr1;
	}
	for (var i = 0; i < arr1.length; i++) {
		for (var num = 0; num < arr2.length; num++) {
			if (!arr1.includes(arr2[num])) {
				different.push(arr2[num]);
			}
			if (!arr2.includes(arr1[i])) {
				different.push(arr1[i]);
			}
		}
	}
	return different;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function diffArray(arr1, arr2) {
//   var newArr = [];
//   var different = [];
  
//  for (var i = 0; i < arr2.length; i++){
   
//   if (arr1.indexOf(arr2[i]) == -1) {
//      different = i; 
//      newArr = arr2.slice(different, (different+1));
//   } else if (arr2.indexOf(arr1[i]) == -1) {
//      different = i;
//      newArr = arr1.slice(different, (different+1));
//   }
     

//  }
 // return different;


//   newArr = arr2.slice(different, (different+1));
  
  // Same, same; but different.
//   return newArr;
// }