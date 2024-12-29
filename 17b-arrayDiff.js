//WPU Programming Challenge
//Day 17/366 bonus
//https://www.codewars.com/kata/523f5d21c841566fde000009/

function arrayDiff(a, b) {
  return a.filter( valueA => !b.includes(valueA))
}

console.log(arrayDiff([1,2,2,2,3],[1,2])); //[3]