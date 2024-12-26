//WPU Programming Challenge
//Day 14/366
//https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
    let avg = (s1+s2+s3)/3;
    if (avg>=90) return 'A';
    if (avg>=80) return 'B';
    if (avg>=70) return 'C';
    if (avg>=60) return 'D';
    else return 'F';
}

console.log(getGrade(95,90,93));
console.log(getGrade(89,89,90));
console.log(getGrade(70,70,70));
console.log(getGrade(65,70,59));
console.log(getGrade(58,59,60));