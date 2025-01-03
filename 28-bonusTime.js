//WPU Programming Challenge
//Day 28/366
//https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
}

console.log(bonusTime(20, true));
console.log(bonusTime(20, false));