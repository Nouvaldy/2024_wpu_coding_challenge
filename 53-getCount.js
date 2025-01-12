//Day 53/366
//https://www.codewars.com/kata/54ff3102c1bad923760001f3/


// function getCount(str) {
//   let result = 0;
//   for (i=0; i<str.length; i++) {
//     if ((/[aiueo]/).test(str[i])) result++
//   }
    
//   return result;
// }

function getCount(str) {
  return (str.match(/[aeiou]/g)||[]).length;
}

console.log(getCount("abracadabra")); //5