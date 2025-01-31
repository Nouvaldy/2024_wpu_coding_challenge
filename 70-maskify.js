// day 70/366
// https://www.codewars.com/kata/5412509bd436bd33920011bc
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify('4556364607935616')); // '############5616'
console.log(maskify('1')); // 1'
console.log(maskify('asdfqwer'));