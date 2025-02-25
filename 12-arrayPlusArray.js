//WPU Programming Challenge
//Day 12/366
//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);  
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 1 + ... + 6 = 21