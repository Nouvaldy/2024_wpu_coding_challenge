//day 57/366
//https://www.codewars.com/kata/52ec24228a515e620b0005ef/
function sum(n) {
    let arr = Array(n+1).fill(0);
    arr[0] = 1;

    for(i = 1; i <= n; i++) {
        for(j = i; j <= n; j++) {
            arr[j] += arr[j-i]
        }
    }

    return arr[n];
}
console.log(sum(1)); //1
console.log(sum(2)); //2
console.log(sum(3)); //3
console.log(sum(4)); //5
console.log(sum(5)); //7
console.log(sum(10)); //42