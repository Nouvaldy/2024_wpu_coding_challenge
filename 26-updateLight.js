//WPU Programming Challenge
//Day 26/366
//https://www.codewars.com/kata/58649884a1659ed6cb000072/

// function updateLight(current) {
//     switch(current) {
//         case 'green': return 'yellow';
//         case 'yellow': return 'red';
//         case 'red': return 'green';
//     }
// }

function updateLight(current) {
    return (current === 'green') ? 'yellow' : (current === 'yellow') ? 'red' : 'green'
}

console.log(updateLight("green")); //yellow
console.log(updateLight("yellow")); //red
console.log(updateLight("red")); //green