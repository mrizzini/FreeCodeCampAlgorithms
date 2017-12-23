function rot13(str) { // LBH QVQ VG!

  var newStr = "";
  var final = "";

  
  for (var i=0; i < str.length; i++) {
    newStr = str.charCodeAt(i);
    if (newStr < 78 && newStr > 63) {
          final += String.fromCharCode(newStr + 13);
    } else if (newStr >= 78) {
          final += String.fromCharCode(newStr - 13);
    } else  {
          final += String.fromCharCode(newStr);
    }
  }
  return final;
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");
 rot13("SERR CVMMN!");


// S = 83  F = 70