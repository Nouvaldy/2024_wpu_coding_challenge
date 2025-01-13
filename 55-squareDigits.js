//day 55/366
//https://www.codewars.com/kata/546e2562b03326a88e000020/

// function squareDigits(num){
//     return parseInt(String(num).split('').map(x => x*x).join(''));
// }

function squareDigits(num){
    return +(String(num).split('').map(x => x*x).join(''));
}

console.log(squareDigits(9119));