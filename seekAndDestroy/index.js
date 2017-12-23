function destroyer(arr) {
  
  var argueOne = arguments[1];
  var argueTwo = arguments[2];
  var argueThree = arguments[3];
  
  function destroy(value) {
    console.log("hi" + arguments[1]);
    return value != argueOne && value != argueTwo && value != argueThree;
  }
  
  return arr.filter(destroy);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);