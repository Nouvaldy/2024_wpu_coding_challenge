//day65/366
//https://www.codewars.com/kata/55908aad6620c066bc00002a

// function XO(str){
//   const low = str.toLowerCase()
//   let obj = {};
//   for (i=0; i<str.length; i++) {
//     if (obj[low[i]] === 'x' || 'o') obj[low[i]] = (obj[low[i]] || 0) + 1;
//   }
//   return obj.x === obj.o;
// }

function XO(str){
  const low = str.toLowerCase().split('');
  return low.filter(a => a === 'x').length === low.filter(a => a === 'o').length;
}

console.log(XO('ooxx')) // true
console.log(XO('xooxx')) // false
console.log(XO('ooXxm')) // true
console.log(XO('zpzpzpp')) // true
console.log(XO('zzoo')) // false