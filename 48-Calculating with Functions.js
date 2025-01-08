//day 48/366
//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(func) {
    if (!func) return 0;
    else return func(0);
}
function one(func) {return (func) ? func(1) : 1}
function two(func) {return (func) ? func(2) : 2}
function three(func) {return (func) ? func(3) : 3}
function four(func) {return (func) ? func(4) : 4}
function five(func) {return (func) ? func(5) : 5}
function six(func) {return (func) ? func(6) : 6}
function seven(func) {return (func) ? func(7) : 7}
function eight(func) {return (func) ? func(8) : 8}
function nine(func) {return (func) ? func(9) : 9}

function plus(y) {
    return function(x) {
        return x + y;
    }
}
function minus(y) {return (x) => x - y}
function times(y) {return (x) => x * y}
function dividedBy(y) {return (x) => Math.floor(x / y)}

console.log(zero(plus(zero())));
console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3




