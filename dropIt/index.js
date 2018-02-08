function dropElements(arr, func) {

  for (var i = 0; i < arr.length; i++) { // loops thru arr
    if (func(arr[i])) { // if the function returns true for arr[i],
      return arr.slice(i); // then return the arr, sliced at that index. 
    } 
  }
  return []; // if nothing ever passes, return this empty array
}

// dropElements([1, 2, 3, 4], function(n) {return n < 3; });
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
// dropElements([1, 2, 3, 4], function(n) {return n > 5;});
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});