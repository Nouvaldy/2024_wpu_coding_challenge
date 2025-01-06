//day 39/366
//https://www.codewars.com/kata/54da5a58ea159efa38000836
//Given an array of integers, find the one that appears an odd number of times.

// function findOdd(A) {
//     let occurence = {};
//     for (i = 0; i < A.length; i++) {
//         occurence[A[i]] = (occurence[A[i]] || 1) * -1;
//     }
//     return parseInt(Object.entries(occurence).filter(([key, values]) => values === -1)[0][0])
// }

const findOdd = (xs) => xs.reduce((acc, cur) => acc ^ cur); // ^ artinya XOR atau hetero

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //5

