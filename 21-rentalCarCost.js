//WPU Programming Challenge
//Day 21/366
//https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
    if (d >= 7) return 40*d-50;
    if (d >= 3) return 40*d-20;
    else return (d*40);
}

console.log(rentalCarCost(1))
console.log(rentalCarCost(3))
console.log(rentalCarCost(7))