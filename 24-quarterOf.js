//WPU Programming Challenge
//Day 24/366
//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/

// const quarterOf = (month) => {
//     if (month <=3) return 1;
//     if (month <=6) return 2;
//     if (month <=9) return 3;    
//     else return 4;
// }

const quarterOf = (month) => Math.ceil(month/3);

console.log(4) //Month 4 => Quarter 2