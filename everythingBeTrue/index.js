function truthCheck(collection, pre) {
  var final;
  
  for (var i = 0; i < collection.length; i++) { // iterates through the length of the collection array
    if (collection[i][pre]) { // if the index of the collection array has a valid property of pre
      final = true; // store true in final
    } else { // if the index of the collection does not have a valid property of pre
      final = false; // store false in final
      return final; // return false, exit out of loop
    }
  }
  return final; // returns true if all indexes pass test
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");