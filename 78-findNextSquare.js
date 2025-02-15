//day 78/366
//https://www.codewars.com/kata/56269eb78ad2e4ced1000013
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq)+1)**2 : -1;
}

console.log(findNextSquare(121))
console.log(findNextSquare(144))
console.log(findNextSquare(145))