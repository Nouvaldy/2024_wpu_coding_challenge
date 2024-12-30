//WPU Programming Challenge
//Day 18/366 bonus
//https://www.codewars.com/kata/5264d2b162488dc400000001/

// function spinWords(string) {
//     let splitted = string.split(' ');
//     let joined = [];
    
//     const flip = (word) => {
//         let result = [];
//         for (i = word.length-1; i >= 0; i--) {
//             result += word[i];
//         }
//         return result;
//     }

//     for (x of splitted) {
//         if (x.length > 4) joined += ' ' + flip(x);
//         else joined += ' ' + x;
//     }

//     return joined.trim();
// }

function spinWords(str) {
    return str.split(' ').map((word) => 
        word.length > 4 ? word.split('').reverse().join('') : word
    ).join(' ');
}

console.log((spinWords("Hey fellow warriors")));
console.log((spinWords("Arek Malang, ayo pake boso kebalikan")));