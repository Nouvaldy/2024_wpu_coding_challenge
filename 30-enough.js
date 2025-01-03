//WPU Programming Challenge
//Day 30/366
//https://www.codewars.com/kata/5875b200d520904a04000003/

// function enough(capacity, on, wait) {
//     if (capacity-on-wait > 0) return 0;
//     else return Math.abs(capacity-on-wait)
// }

function enough(capacity, on, wait) {
    return Math.max(-capacity+on+wait, 0);
}

console.log(enough(100, 60, 50)); //sisa 10 orang, Output: 10
console.log(enough(100, 2, 3)); //cukup semua, Output: 0