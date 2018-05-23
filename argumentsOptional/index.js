// // closures

// function one(x){
//     // console.log(x + 2);
//     console.log(x + 2);
//     return function(y){
//         console.log(x + y);
//         // makes x the 2
//         // makes y the 3
//     };
// }

// one(2)(3);


// var two = one(5);
// two(8);

// // in memory:
// // function     {
//     // console.log(2 + y);
// // }

// // console.log(x);


function addTogether() {
    var numOne = arguments[0];
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
    if (arguments.length === 2) {
        if (typeof(arguments[1]) === 'number') {
            return numOne + arguments[1];
        }
        return undefined;
    }
    
    return function() {
        if (typeof(arguments[0]) === 'number') {
            return numOne + arguments[0];
        }
        return undefined;
    };
}

addTogether(2,3);

// if 2 arguments add them together
// must be numbers
// if 1 argument send function back to get the second item

// OR TIERNARY FUNCTION: 

function addTogether() {
  
    var numOne = arguments[0];
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
  
    if (arguments.length === 2) {
      return typeof(arguments[1]) === 'number' ? numOne + arguments[1] :         undefined;    
    }
  
    return function() {
        return typeof(arguments[0]) === 'number' ? numOne + arguments[0] : undefined;
    };
}

addTogether(2,3);