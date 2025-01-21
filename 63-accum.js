//day 63/366
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    return s
        .split('')
        .map((curr, index) => {
            return curr.toUpperCase() + curr.repeat(index).toLowerCase();
        })
        .join('-');
}

console.log(accum('aBCd')); // "A-Bb-Ccc-Dddd"