//Day 35/366
//https://www.codewars.com/kata/52597aa56021e91c93000cb0

// function moveZeros(arr) {
//     let result = [];
//     let zeros = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) zeros +=1;
//         else result.push(arr[i])
//     }
//     for (i = 0; i < zeros; i++) {
//         result.push(0)
//     }
//     return result
// }

function moveZeros(arr) {
    return arr
        .filter(x => x !== 0)
        .push(arr.filter(x => x === 0));
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])); //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]