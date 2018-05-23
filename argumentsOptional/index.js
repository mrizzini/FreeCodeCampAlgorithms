// closures

function one(x){
    // console.log(x + 2);
    console.log(x + 2);
    return function(y){
        console.log(x + y);
        // makes x the 2
        // makes y the 3
    };
}

one(2)(3);


var two = one(5);
two(8);

// in memory:
// function     {
    // console.log(2 + y);
// }

// console.log(x);