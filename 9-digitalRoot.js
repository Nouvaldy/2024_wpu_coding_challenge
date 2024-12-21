//WPU Programming Challenge
//Day 9/366 kita pastikan
//https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
    // Ensure the input is treated as a valid decimal number
    if (typeof n === 'string') {
        n = parseInt(n, 10); // Convert string to decimal integer
    }
    while (n >= 10) {
        n = n.toString().split('').reduce((sum, digit) => sum + digit, 0);
    }
    return n;
}

// Examples
console.log(digitalRoot(16));       // Output: 7
console.log(digitalRoot(942));      // Output: 6
console.log(digitalRoot(132189));   // Output: 6
console.log(digitalRoot(493193));   // Output: 2
console.log(digitalRoot('015'));    // Output: 6 (if input is provided as a string)