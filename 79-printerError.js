//day 79/366
//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
  //a-m is good, n-z is bad
  var bad = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] > "m") bad += 1;
  }
  return bad + "/" + s.length;
}

const s = "aaaxbbbbyyhwawiwjjjwwm";
console.log(printerError(s)); // '8/22'
