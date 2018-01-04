// needs more work



function translatePigLatin(str) {
  
  str = str.split("");
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      str.push("way");
      break;
    } else if (str[i] !== "a" || str[i] !== "e" || str[i] !== "i" || str[i] !== "o" || str[i] !== "u"){
       str.push(str[i]);
      str.push('ay');
      str.slice(0, 1);
      break;
    }
  }
  
  
  
 str =  str.join("");
  
  return str;
}

translatePigLatin("glove");

