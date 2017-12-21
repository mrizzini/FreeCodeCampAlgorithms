
function fearNotLetter(str) {
  var firstLetter = str[0];
  
//   console.log(firstLetter.charCodeAt(0));
//   console.log("code for b is", "a".charCodeAt(0));
  
  for (var i = 0; i < str.length - 1; i++) {
//     console.log(str[i]);
    if (str.charCodeAt(i + 1) === str.charCodeAt(i) + 1) {
      console.log("next character is the next alphabetically");
    } else {
      console.log("found missing char");
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  
  console.log("hello");
  
  return undefined;
}

fearNotLetter("abcde");

//Step 1 - get first letter = firstChar*

// Step 2 - check if next character is the next character in the alphabet*
// 		Step 3 - Check if another character is available*
// 			Step 4 - repeat line 2 with next character*
// 	Step 5 - else
// 			Step 6- Return undefined
// Step 7 - else
//   Step 8 - return expected character*


// String.prototype means you can replace that with a variable that contains a string
// non protoype usually means you create a string
