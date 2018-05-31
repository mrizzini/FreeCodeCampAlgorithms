function frankenSplice(arr1, arr2, n) {

  var frankenstein = arr2.slice(0, n).concat(arr1, arr2.slice(n));

  return frankenstein;
}

// frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
frankenSplice([1, 2, 3], [4, 5], 1);