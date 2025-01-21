// day 66/366
//

// function duplicateCount(str){
//   const low = str.toLowerCase()
//   let obj = {};
//   for (i=0; i<str.length; i++) {
//     obj[low[i]] = (obj[low[i]] || 0) + 1;
//   }
//   return Object.values(obj).filter(x => x>1).length;
// }

// function duplicateCount(str){
//   const low = str.toLowerCase().split('')
//   return low.filter((curr, idx, arr) => {
//     return arr.indexOf(curr) !== idx //Mengecek apakah karakter saat ini bukanlah kemunculan pertama
//     && arr.lastIndexOf(curr) === idx; //Mengecek apakah karakter saat ini adalah kemunculan terakhir karakter tersebut di array, artinya biar ga duplikat
//   }).length;
// }

function duplicateCount(text){
    return text.toLowerCase().split('').filter((c, i, a) => a.indexOf(c) != i && a.lastIndexOf(c) == i).length;
}

console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('aabbcde')); // 2 (a and b)
console.log(duplicateCount('aabBcde')); // 2 (a and b)
console.log(duplicateCount('Indivisibility')); // 1 (i)
