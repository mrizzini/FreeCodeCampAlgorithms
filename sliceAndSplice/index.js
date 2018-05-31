function frankenSplice(arr1, arr2, n) {
    
    // arr2.slice(0, n) will give you the first part of arr, before the index of n
    // then .concat adds in arr1, and then the sliced off part of arr2 that was not included in the first slice

  var frankenstein = arr2.slice(0, n).concat(arr1, arr2.slice(n));

  return frankenstein;
}

// frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
frankenSplice([1, 2, 3], [4, 5], 1);