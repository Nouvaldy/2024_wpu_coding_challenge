//Day 36/366
//https://www.codewars.com/kata/52742f58faf5485cae000b9a/

function formatDuration (seconds) {
    const arr = [
        ['year', Math.floor(seconds/31536000)],
        ['day', Math.floor((seconds%31536000)/86400)],
        ['hour', Math.floor(((seconds%31536000)%86400)/3600)],
        ['minute', Math.floor((((seconds%31536000)%86400)%3600)/60)],
        ['second', ((((seconds%31536000)%86400)%3600)%60)],
    ]

    for (i = 0; i < arr.length; i++) {
        if (arr[i][1] > 1) arr[i][0] += `s`; 
    }

    const nonZeroArr = arr.filter(([_,value]) => value !== 0);
    const firstHalf = nonZeroArr.slice(0, nonZeroArr.length-2);
    const secondHalf = nonZeroArr.slice(nonZeroArr.length-2);

    if (firstHalf.length) {
        return firstHalf.map(([key, value]) => `${value} ${key}, `).concat(secondHalf.map(([key, value]) => `${value} ${key}`).join(` and `)).join('')
    }
    if (secondHalf.length) {
        return secondHalf.map(([key, value]) => `${value} ${key}`).join(' and ')
    }
    else return 'now';
}

console.log(formatDuration(0)); //'now'
console.log(formatDuration(6)); //'6 seconds'
console.log(formatDuration(61)); //'1 minute and 1 second'
console.log(formatDuration(3662)); //"1 hour, 1 minute and 2 seconds"
console.log(formatDuration(31535999)); //'364 days, 23 hours, 59 minutes and 59 seconds'
console.log(formatDuration(41260749)); //"1 year, 112 days, 13 hours, 19 minutes and 9 seconds"