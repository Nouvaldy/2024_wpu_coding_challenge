//WPU Programming Challenge
//Day 13/366
//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

let points = (games) => {
    let result = 0;
    for (let i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][2]) {result += 3};
        if (games[i][0] === games[i][2]) {result += 1};
    }
    return result;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); //30
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); //10
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])); //0
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])); //15
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])); //12