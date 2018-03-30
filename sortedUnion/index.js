function uniteUnique(arr) {
  var joined = [];
  for (var i = 0; i < arguments.length; i++) {
     joined.push(arguments[i]);
  }
  // the above joins all the arrays into one array of arrays
 
  var flattened = joined.reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    },
    []
  );
  // the above flattens the array into one single array.

  var unique = flattened.reduce(function(a,b){
      if (a.indexOf(b) < 0 ) {
        a.push(b);
      }
      return a;
    },
    []
   );
   // the above checks if the index of an array is already present in the array. if it is not, it stores it in unique. 
  
  return unique;
}

 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);