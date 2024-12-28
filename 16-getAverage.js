//WPU Programming Challenge
//Day 16/366
//https://www.codewars.com/kata/563e320cee5dddcf77000158

const getAverage = (marks) => { return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length) };

console.log(getAverage([1,2,3,4,5,])) //3