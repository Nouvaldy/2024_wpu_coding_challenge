//day 69/366
//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

String.prototype.toJadenCase = function () {
    return this.split(' ').map( x => {
        return x.charAt(0).toUpperCase() + x.slice(1);
    }).join(' ');
};

console.log(`How can mirrors be real if our eyes aren't real`.toJadenCase()); //How Can Mirrors Be Real If Our Eyes Aren't Real