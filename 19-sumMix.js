//WPU Programming Challenge
//Day 19/366
//https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x) {
    return x.reduce((acc, curr) => {
        return acc + parseInt(curr);
    }, 0)
} 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); //41