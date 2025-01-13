//day 56/366
//https://www.codewars.com/kata/52c4dd683bfd3b434c000292/

// function isInteresting(number, awesomePhrases) {
//     if (number === 97) return 0;
//     if (number === 99) return 1;
//     function check(number, awesomePhrases, output) {
//         //Error Checking
//         if (number < 99 || number >= 1000000000) return 0;
//         awesomePhrases = awesomePhrases || [7,4,1]
//         //Rule#1 Any digit followed by all zeros: 100, 90000
//         let arr = String(number).split('');
//         if (arr.reduce((x,y) => x+(+y),-arr[0]) === 0) return output+'#1';

//         //Rule#2 Every digit is the same number: 1111
//         for(i=0; i<arr.length; i++) {
//             if (arr[i] != arr[0]) break;
//             if (i === arr.length-1) return output+'#2'
//         }

//         //Rule#3 The digits are sequential, incementing†: 1234 or 7890
//         for(i=0; i<arr.length; i++) {
            
//             if(i === arr.length-2 && arr[i] == 9 && arr[i+1] == 0) return output+'#3';
//             if(i === arr.length-1) return output+'#3'
//             if(+arr[i]+1 !== +arr[i+1]) break;
//         }
        
//         // //Rule#4 The digits are sequential, decrementing‡: 43210
//         // if (arr.reduce((x,y) => x+(+y),0) === (arr.length-1)/2 * (+arr[0]+(+arr[arr.length-2]))) return output+'#4'; //Case#7890
//         for(i=0; i<arr.length; i++) {
//             if(i == arr.length-1) return output+'#4';
//             if(arr[i]-1 != arr[i+1]) break;
//         }

//         //Rule#5 The digits are a palindrome: 1221 or 73837
//         while(arr.length>1) {
//             const first = arr.shift();
//             const last = arr.pop();
            
//             if (first !== last) break;
//             if (arr.length === 1 || arr.length === 0) return output+'#5';
//         }
        
//         //Rule#6 The digits match one of the values in the awesomePhrases array
//         if (awesomePhrases.includes(number)) return output+'#6';
//     }

//     return check(number, awesomePhrases, 2) || check(number+1, awesomePhrases, 1) || check(number+2, awesomePhrases, 1) || 0;
// }

function isInteresting(number, awesomePhrases) {
    function check(number, awesomePhrases, output) {
        if (number < 100 || number >= 1000000000) return 0;
        awesomePhrases = awesomePhrases || [0];
        if (/^\d00+$/.test(number)) return output;
        if (/^(\d)\1+$/.test(number)) return output;
        if ('1234567890'.includes(number)) return output;
        if ('9876543210'.includes(number)) return output;
        if (number == number.toString().split('').reverse().join('')) return output;
        if (awesomePhrases.includes(number)) return output;
    }
    return check(number, awesomePhrases, 2)
    || check(number+1, awesomePhrases, 1) 
    || check(number+2, awesomePhrases, 1)
    || 0;
}

//boring
console.log(isInteresting(97)); //0

//about to be awesome
console.log(isInteresting(98)); //1
console.log(isInteresting(99)); //1

//awesome
console.log(isInteresting(100)); //2
console.log(isInteresting(1111)); //2
console.log(isInteresting(123456789)); //2
console.log(isInteresting(234567890)); //2
console.log(isInteresting(6543210)); //2
console.log(isInteresting(1221)); //2
console.log(isInteresting(73837)); //2
console.log(isInteresting(256, [1337, 256])); //2



