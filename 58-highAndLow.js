//day 58/366
//https://www.codewars.com/kata/554b4ac871d6813a03000035

// function highAndLow(numbers){
//     const arr = numbers.split(' ').sort((a,b) => b-a);
//     return arr[0] +' '+ arr[arr.length-1]
// }

function highAndLow(numbers){
    const arr = numbers.split(' ');
    return Math.max(...arr) +' '+ Math.min(...arr);
}

console.log(highAndLow("1 2 -3 4 5")); //"5 -3"