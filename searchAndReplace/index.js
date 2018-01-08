function myReplace(str, before, after) {
  
  var position = "";
  
if (before[0] === before[0].toUpperCase()) {
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join("");
    } 

 str = str.split(/\s|_/g);
 position = str.indexOf(before);
 str.splice(position, 1, after); 
 str = str.join(" ");
  
  return str;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("Let us go to the store", "store", "mall");
// myReplace("This has a spellngi error", "spellngi", "spelling");
 myReplace("His name is Tom", "Tom", "john");
// myReplace("Let us get back to more Coding", "Coding", "algorithms");