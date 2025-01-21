// function isIsogram(str){
//   const low = str.toLowerCase()
//   let obj = {};
//   for (i=0; i<str.length; i++) {
//     if (obj[low[i]]) return false;
//     obj[low[i]] = (obj[low[i]] || 0) + 1;
//   }
//   return true;
// }

function isIsogram(str){
  return new Set(str.toLowerCase()).size == str.length;
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('baca')); //false
console.log(isIsogram('bacA')); //false