function smallestCommons(arr) {
  var numericOrder = [];
  var range = [arr[0]];
  var multiplesZero = [];
  var multiplesOne = [];
  var test = 0;
  var isInt = 0;
  var final = 0;
  
  numericOrder = arr.sort(function(a, b){return b-a;});
  
  for (var num = 1; num < 65; num++) {
    multiplesZero.push(arr[0] * num);
    multiplesOne.push(arr[1] * num);
  }
  
//  return multiplesOne;
  
  for (var i = 0; arr[0] - arr[1] > 0; i++) {
  range.push(arr[0] - arr[1]);
    arr[1] = arr[1] + 1;
  }


  
  for (var e = 0; e < multiplesZero.length; e++){
   if (multiplesZero[0] === multiplesOne[e]) {
    test = multiplesOne[e];
     for (var q = 0; q < range.length; q++){
    isInt = test/range[q]; 
     if (Number.isInteger(isInt)) {
       final = test;
       
     } else {
        break;
     }
    }
   } 
  }
  
 // return test;
  
   return final;
//   return range;
  
//   return arr;
}


// ZERO 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70
// ONE 1:  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// range is 5, 4, 3, 2, 1  


smallestCommons([5,1]);
