function palindrome(str) {
  var replaceStr = str.replace(/[^0-9a-zA-Z]/g, "");
  // replace Str = Mom ---> this gets rid of non-alphanumeric characters
  var lowerStr = replaceStr.toLowerCase();
  // lowerStr = mom ---> this changes string to all lowercase
  var newStr = lowerStr.split('').reverse().join('');
  // newStr = 'm' 'o' 'm' || 'm' 'o' 'm' || mom ---> this turns string into an array, reverses it, then puts it back into string
  if (newStr === lowerStr) { // this checks if the newStr var we just made is equal to lowerStr
  return true; }
  else return false;
} 


console.log(palindrome("---M.om/"));
console.log(palindrome("---M.odm/"));
console.log(palindrome("My age is 0, 0 si ega ym."));

//checking for Palindromes.


// FOLLOWING IS REFACTORING

function palindrome(str) {
	var newStr;
	newStr = str.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
	str = newStr.split("").reverse().join("");
	if (str === newStr) {
		return true;
	} else {
		return false;
	}
}
palindrome("not a palindrome");