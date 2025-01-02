//WPU Programming Challenge
//Day 20/366 bonus
//https://www.codewars.com/kata/583203e6eb35d7980400002a

// function countSmileys(arr) {
//   let result = 0;
//   for (x of arr) {
//     if ((x[0] === ':' || x[0] ===';')
//       && ((x[1] === '-' || x[1] === '~' )
//       && (x[2] === ')' || x[2] === 'D' )
//       || (x[1] === ')' || x[1] === 'D' ))) result += 1;
//   }  
//   return result;
// }

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]/.test(x)).length
}

console.log(countSmileys([';]', ':[', ';*', ':-$', ';-D'])); //1
console.log(countSmileys([':D',':~)',';~D',':)'])); //4