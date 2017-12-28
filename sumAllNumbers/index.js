
function sumAll(arr) {
  var sum = "";
  var max = "";
  var min = "";
  var between = "";

  console.log("arr is "+ arr);
  
  arr.reduce(function (a, b) {
    max = Math.max(a, b);
    min = Math.min(a, b);
    sum = max + min;
    for (var i = 0; max-1 > min+1; i++) {
    max = max - 1;
    min = min + 1;
    sum += max + min;
    between = max - min;
    console.log("max is "+ max);
    console.log("min is "+ min);
    console.log("between is " + between);
    }
  });
  return sum;
}

//sumAll([1, 4]);
sumAll([15, 30]);


// OR


function sumAllNumbers(arr) {
  var sum = 0;
  var max = 0;
  var min = 0;

  console.log("arr is "+ arr);
  
  arr.reduce(function (a, b) {
    max = Math.max(a, b);
    min = Math.min(a, b);
    for (var i = min; i <= max; i++) {
    sum += i;
    console.log("max is "+ max);
    console.log("min is "+ min);
    }
  });
  return sum;
}

sumAllNumbers([1, 4]);
//sumAll([15, 30]);