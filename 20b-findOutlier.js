//WPU Programming Challenge
//Day 120/366 bonus
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/

// function findOutlier(integers) {
//     let even = [];
//     let odd = [];
//     for (i=0; i<integers.length; i++) {
//         (integers[i]%2 === 0) ? even.push(integers[i]) : odd.push(integers[i]);
//     }
//     return (even.length === 1) ? parseInt(even) : parseInt(odd)
// }

function findOutlier(integers) {
    const even = integers.filter(i => i%2 === 0);
    const odd = integers.filter(i => i%2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) //11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) //160