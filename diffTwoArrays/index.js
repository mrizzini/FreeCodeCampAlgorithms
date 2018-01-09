
function diffArray(arr1, arr2) {
  var newArr = [];
  var different = [];
  
 for (var i = 0; i < arr2.length; i++){
   
   if (arr1.indexOf(arr2[i]) == -1) {
     different = i; 
     newArr = arr2.slice(different, (different+1));
   } else if (arr2.indexOf(arr1[i]) == -1) {
     different = i;
     newArr = arr1.slice(different, (different+1));
   }
     

 }
 // return different;


//   newArr = arr2.slice(different, (different+1));
  
  // Same, same; but different.
  return newArr;
}