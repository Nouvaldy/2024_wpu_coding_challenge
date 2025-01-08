//day 49/366
//https://www.codewars.com/kata/525c65e51bf619685c000059

// function cakes(recipe, available) {
//     let result = [];
//     for (key in recipe) {
//         const x = available[key] / recipe[key];
//         result.push(x);
//     }
//     return (result.includes(NaN)) ? 0 : Math.floor(Math.min.apply(null, result));
// }

const cakes = (r, a) => Math.floor(Math.min.apply(0, [...Object.keys(r)].map(k => a[k] / r[k] || 0)));

// Must return 0
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, []));
// must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 