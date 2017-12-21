
function findLongestWord(str) {
 var str = str.split(" ");
  var longestWord = 0;
  var word = " ";
 for (var i = 0; i < str.length; i++) // creates a loop through all the arrays
   if (longestWord < str[i].length) { // if 0 < 3 ||| if 3 < 5 ||| if 5 < 6 
     longestWord = str[i].length; // then longestWord is now 3 ||| then longestWord is 5 ||| then longestWord is 6
     word = str[i]; // and word is now 0; ||| and word is now 1 ||| and word is now 4
   }
  return word.length; // returns the length of word 
}

findLongestWord("The quick brown fox jumped over the lazy dog");