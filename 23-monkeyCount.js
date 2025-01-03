//WPU Programming Challenge
//Day 23/366
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/

function monkeyCount(n) {
    let result = [];
    for (i=1; i<=n; i++) {
        result.push(i);
    }
    return result;
}

console.log(monkeyCount(20)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]