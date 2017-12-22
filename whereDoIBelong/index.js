
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var thisNum = num; // sets variable to store value of num
  var newArr = arr.push(num); // pushes num to the existing array
  //console.log(arr);
  
  arr.sort(function (a,b) {return a-b;}); // sorts the array from lowest number to highest
  console.log(arr);
  
  return arr.indexOf(num); // returns the index of where num was placed after the sort
}

getIndexToIns([40, 60], 50);

// getIndexToIns([3, 10, 5], 3);




// first insert num into arr

// sort arr from smallest to biggest

// return index of array 