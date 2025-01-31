//day 71/366
//https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a - b);
    return sorted[0] + sorted[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13 , "Sum should be 13");