
function confirmEnding(str, target) {
    
    var length;
    var newStr;

 // return str.substr(-target.length) === target;
  // this takes the string length and - the target length. Then takes that number and applies it to the string. It returns the part of the string that remains after that number. Ex- this takes 7 - 3. That is 4. So it returns every letter after the 4th item in the string. And if that equals the target, then it is true. 

//OR 

  length = target.length;

  newStr = str.substring(str.length - length);
  
  if (newStr === target) {
    return true;
  } else {
    return false;
    }

// OR use this if

// newStr = str.substr(-length);  
  
//     if (newStr === target) {
//     return true;
//   } else {
//     return false;
//   }
  
  

}

confirmEnding("Bastian", "ian");