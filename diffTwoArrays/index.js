

function diffArray(arr1, arr2) {
  var mergedArr = arr1.concat(arr2);
  var different = [];
  

  

     for (var q = 0; q < arr1.length; q++){
     for (var e = 0; e < arr2.length; e++){
        
       
      
        if (!arr1.includes(arr2[e])) {
          different.push(arr2[e]);
          
        } if (!arr2.includes(arr1[q])) {
          different.push(arr1[q]);
        } 
        }
       
      }
      
      
        return different;
}


diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);

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