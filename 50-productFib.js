//day 50/366
//https://www.codewars.com/kata/5541f58a944b85ce6d00006a

// function fibonaci(n) {;
//     if (n <= 1) return 1;
//     return fibonaci(n-1) + fibonaci(n-2);
// }

// function fibonaci(n, memo) {
//     memo = memo || {};
//     if (memo[n]) return memo[n];
//     if (n <= 1) return 1;
//     return memo[n] = fibonaci(n-1, memo) + fibonaci(n-2, memo);
// }

function productFib(prod) {
    function fibonaci(n, memo) {
        memo = memo || {};
        if (memo[n]) return memo[n];
        if (n <= 1) return 1;
        return memo[n] = fibonaci(n-1, memo) + fibonaci(n-2, memo);
    }

    for (n=0; fibonaci(n)*fibonaci(n+1) < prod; n++) {}
    return [fibonaci(n), fibonaci(n+1), fibonaci(n)*fibonaci(n+1) === prod];
}

console.log(productFib(2472169789339634));
// 39088169 * 63245986 = 2472169789339634
// Output:[ 39088169, 63245986, true ]