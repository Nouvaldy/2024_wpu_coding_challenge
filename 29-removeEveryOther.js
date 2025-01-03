//WPU Programming Challenge
//Day 29/366
//https://codewars.com/kata/5769b3802ae6f8e4890009d2/

// function removeEveryOther(arr) {
//     let result = [];
//     for (x in arr) {
//         if (x%2 === 0) result.push(arr[x]);
//     }
//     return result;
// }

function removeEveryOther(arr) {
    return arr.filter((value, index, array) => {
        return index % 2 === 0;
    })
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])); //["Keep", "Keep", "Keep"]