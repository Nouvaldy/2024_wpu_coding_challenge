//WPU Programming Challenge
//Day 8/366 kita pastikan
//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// var countSheep = (num) => {
//     let result= '';
//     for (let i = 1; i<=num; i++) {
//       result += ${i} sheep...;
//     }
//         return result;
// }
  
const countSheep = (num) => {return [...Array(num)].map((_,i) => `${i+1} sheep...` ).join('')};
  
console.log(countSheep(5)); //'1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...'