// day 72/366
// https://www.codewars.com/kata/55f2b110f61eb01779000053

// function getSum(a, b)
// {
//     if(a === b)
//     {
//         return a;
//     }
//     else if(a < b)
//     {
//         return a + getSum(a + 1, b);
//     }
//     else
//     {
//         return b + getSum(a, b + 1);
//     }
// }

function GetSum(a,b)
{
    // Sn: Jumlah deret aritmatika
    return (Math.abs(a - b) + 1) * (a+b) / 2;
}

console.log(getSum(1, 0)); //1
console.log(getSum(1, 1)); //1
console.log(getSum(-1, 2)); //2