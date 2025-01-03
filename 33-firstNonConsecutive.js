//WPU Programming Challenge
//Day 33/366
//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

// function firstNonConsecutive (arr) {
//     for (i=0; i<arr.length-1; i++) {
//         if(arr[i]-arr[i+1] !== -1) return arr[i+1];
//     }
//     return null;
// }

function firstNonConsecutive (arr) {
    const result = arr.find((val, index) => val !== index + arr[0]);
    return result || null
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8])); //6
console.log(firstNonConsecutive([1,2,3,4,5,6,7,8])); //null
