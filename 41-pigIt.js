//day 42/366
//https://www.codewars.com/kata/520b9d2ad5c005041100000f

// function pigIt(str){
//   let splited = str.split(' ');
//   let result = [];

//   for(x of splited) {
//     if (x !== '!' && x !== '?') {
//       let kata = x.split('');
//       kata.push(kata.shift());
//       result += kata.join('') + 'ay ';
//     }
//     else result += x;
//   }
//   return result.trim();
// }

function pigIt(str) {
  return str.replace(/(\w)(\w*)/g, "\$2\$1ay")
}

console.log(pigIt('Pig latin is cool !'));