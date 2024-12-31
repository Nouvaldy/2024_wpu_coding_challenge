//WPU Programming Challenge
//Day 19/366 bonus
//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/

// function duplicateEncode(words) {
//     let duplicatedChar = '';
//     const x = words.toLowerCase();
//     for (i = 0; i < x.length; i++)
//     {
//         for (j = i+1; j < x.length; j++) {
//             if (x[i] === x[j]) duplicatedChar += x[i]
//         }
//     }

//     let result = '';
//     for (i = 0; i < x.length; i++) {
//         result += (duplicatedChar.includes(x[i])) ? ')' : '(';
//     }

//     return result;
// }

//sebelumnya efisiensinya O(n^2) karena nested loop 
//yang ini efisiensinya O(n)
function duplicateEncode(words) {
    const lower = words.toLowerCase();
    let wordCase = {};

    //menghitung jumlah kemunculan suatu karakter
    for (const word of lower) {
        wordCase[word] = (wordCase[word] || 0) + 1;
    }

    return lower
    .split('')
    .map(word => (wordCase[word] === 1) ? '(' : ')')
    .join('');
}

console.log(duplicateEncode("baca")); //Output: "()()"
console.log(duplicateEncode("Anda")); //ga peduli gede-kecil, Output: ")(()"
