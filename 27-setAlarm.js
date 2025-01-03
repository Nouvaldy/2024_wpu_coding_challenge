//WPU Programming Challenge
//Day 27/366
//https://www.codewars.com/kata/568dcc3c7f12767a62000038/

function setAlarm(employed, vacation){
    return (employed && !vacation);
}

console.log(setAlarm(true, true)); //false
console.log(setAlarm(true, false)); //true
console.log(setAlarm(false, true)); //false
console.log(setAlarm(false, false)); //false