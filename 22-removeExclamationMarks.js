//WPU Programming Challenge
//Day 21/366
//https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// function removeExclamationMarks(str) {
//     return str.split('').filter(x => x !== '!').join('')
// }

function removeExclamationMarks(str) {
    return str.split('!').join('')
}

console.log(removeExclamationMarks("Hello World!")) //"Hello World"