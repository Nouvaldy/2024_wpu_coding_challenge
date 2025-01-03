//WPU Programming Challenge
//Day 25/366
//https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
    return str.split('').map(x => x+x).join('')
}

console.log(doubleChar('Adidas')) //AAddiiddaass