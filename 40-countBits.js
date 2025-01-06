//day 40/366
//https://www.codewars.com/kata/526571aae218b8ee490006f4/

var countBits = function(n) {
    return n.toString(2).split('').reduce((acc, cur) => parseInt(acc)+parseInt(cur), 0);
};

console.log(countBits(4)); //1
console.log(countBits(10)); //2