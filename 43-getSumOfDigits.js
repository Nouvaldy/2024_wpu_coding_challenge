//day 43/366
//https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/

function getSumOfDigits(integer) {
    return integer
        .toString()
        .split('')
        .reduce((acc, cur) => acc + +cur, 0);
}

console.log(getSumOfDigits(123)); //6