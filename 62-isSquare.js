//day62/366
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(25)); //true
console.log(isSquare(26)); //false