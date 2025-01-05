//day 37/366
//https://www.codewars.com/kata/513e08acc600c94f01000001/

// function rgb(r, g, b) {
//     let z = Math.min(r,255);
//     let x = Math.min(g,255);
//     let c = Math.min(b,255);

//     z = Math.max(z,0).toString(16);
//     x = Math.max(x,0).toString(16);
//     c = Math.max(c,0).toString(16);
    
//     if (z == 0) z='00';
//     if (x == 0) x='00';
//     if (c == 0) c='00';
// console.log(z);

// const zxc = `${z}${x}${c}`
//     let result = zxc.toUpperCase();
//     return result;
// }

function rgb(r, g, b) {
    function minMax(value) {
        return Math.min(Math.max(value,0),255)
    }
    function toHex(value) {
        return minMax(value).toString(16).padStart(2,'0').toUpperCase();
    }
    return toHex(r) + toHex(g) + toHex(b)
}

console.log(rgb(173, 255,  47)); //'ADFF2F'
console.log(rgb(0 , 0,  0)); //'000000'
console.log(rgb(255 , 255,  0)); //'FFFF00'