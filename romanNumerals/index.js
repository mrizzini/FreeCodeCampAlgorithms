

function convertToRoman(num) {
  var numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var final = "";
  
  for (var i = 0; i < numbers.length; i++) {
    while (numbers[i] <= num) {
      final += romanNumeral[i];
      num = num - numbers[i];
    }
  }
  
 return final;
}

convertToRoman(33);