// day 47/366
//https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(sec) {
    const HH = Math.floor(sec/3600).toString().padStart(2,'0');
    const MM = Math.floor((sec%3600)/60).toString().padStart(2,'0');
    const SS = ((sec%3600)%60).toString().padStart(2,'0');

    return HH+':'+MM+':'+SS;
}

console.log(humanReadable(0)) //'00:00:00'
console.log(humanReadable(45296)); //'12:34:56'