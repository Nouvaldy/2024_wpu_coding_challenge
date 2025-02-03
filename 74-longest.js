//74
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/

// function longest(s1, s2) {
//     let result = '';
//     let s3 = s1 + s2;
//     let s3Arr = s3.split('');
//     let s3ArrSorted = s3Arr.sort();
//     for (let i = 0; i < s3ArrSorted.length; i++) {
//         if (s3ArrSorted[i] !== s3ArrSorted[i + 1]) {
//             result += s3ArrSorted[i];
//         }
//     }
//     return result;
// }

function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('');
}

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"