
function confirmEnding(str, target) {

  return str.substr(-target.length) === target;
  // this takes the string length and - the target length. Then takes that number and applies it to the string. It returns the part of the string that remains after that number. Ex- this takes 7 - 3. That is 4. So it returns every letter after the 4th item in the string. And if that equals the target, then it is true. 
}

confirmEnding("Bastian", "ian");