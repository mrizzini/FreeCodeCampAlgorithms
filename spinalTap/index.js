
function spinalCase(str) {
  var newStr = "";
  newStr = str.replace( /([a-z])([A-Z])/g, "$1 $2");
  newStr = newStr.replace(/\s|_/g , "-");
  newStr = newStr.toLowerCase();

  return newStr;
}

spinalCase('ThisIs Spinal Tap');

// Input -  string of words. Any case. Some examples have underscores instead of spaces in some spots. No spaces in some examples and instead, capital letters where the spaces should be.

// Output - spinal case. All lower case words joined by dashes where the spaces would be.


// Solution-

// Example

// Input: “thisIsSpinalTap”
// Output: “this-is-spinal-tap”


// Step 1 - take the string and replace all spaces with a dash “-”

// Step 2 - replace all underscores with a dash “-”

// Step 3 - when a word is joined, separate at the capital letters and add a dash “-”

// Step 4 - set newStr to all lowercase

// Step 5- Return newStr
