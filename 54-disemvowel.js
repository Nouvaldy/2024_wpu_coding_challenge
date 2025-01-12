//day 54/366
//https://www.codewars.com/kata/52fba66badcd10859f00097e/

// function disemvowel(str) {
//     let result = ``;
//     for(i=0; i<str.length; i++) {
//         if (!(/[aiueo]/ig).test(str[i])) result += str[i]
//     }
//     return result;
// }

function disemvowel(str) {
    return str.replace((/[aiueo]/ig), '');
}

console.log(disemvowel(`hey you!`))