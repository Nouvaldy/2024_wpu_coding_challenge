//Day 38/366
//https://www.codewars.com/kata/525f50e3b73515a6db000b83/

// function createPhoneNumber(numbers){
//     let firstHalf = numbers.slice(0,3).join('');
//     let secHalf = numbers.slice(3,6).join('');
//     let thirdHalf = numbers.slice(6).join('');

//     return `(${firstHalf}) ${secHalf}-${thirdHalf}`
// }

function createPhoneNumber(num) {
    let format = '(xxx) xxx-xxxx';
    for (n of num) {
        format = format.replace('x', n);
    }
    return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"