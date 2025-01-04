//Day 34/366
//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/

// function snail(array) {
//     const result = [...array[0]]; //1..6 ➜
//     for (i = 1; i < array.length; i++) {
//         result.push(array[i][array.length-1]) //7..11 ↓
//     }
//     for (i = 2; i < array.length; i++) {
//         result.push(array[array.length-1][array.length-i]) //12..15 ←
//     }
//     for (i = 1; i < array.length; i++) {
//         result.push(array[array.length-i][0]) //16..20 ↑
//     }
// /////////////////////////////////////////////////////////////////////////
//     for (i = 1; i < array.length-1; i++) {
//         result.push(array[1][i]) //21..24 ➜
//     }
//     for (i = 2; i < array.length-1; i++) {
//         result.push(array[i][array.length-2]) //25..27 ↓
//     }
//     for (i = 3; i < array.length; i++) {
//         result.push(array[array.length-2][array.length-i]) //28..30 ←
//     }
//     for (i = 3; i < array.length-1; i++) {
//         result.push(array[array.length-i][1]) //31..32 ↑
//     }
// ////////////////////////////////////////////////////////////////////////////
//     for (i = 2; i < array.length-2; i++) {
//         result.push(array[2][i]) //33..34 ➜
//     }
//     for (i = 3; i < array.length-2; i++) {
//         result.push(array[i][array.length-3]) //35 ↓
//     }
//     for (i = 4; i < array.length-1; i++) {
//         result.push(array[array.length-3][array.length-i]) //36 ←
//     }
//     return result;
// }

function snail(array) {
    const result = [];
    while (array.length) {
        // Ambil baris pertama (atas) ➜
        result.push(...array.shift());
        
        // Ambil elemen terakhir dari setiap baris (kanan) ↓
        for (let i = 0; i < array.length; i++) {
            result.push(array[i].pop());
        }
        
        // Ambil baris terakhir secara terbalik (bawah) ←
        if (array.length) {
            result.push(...array.pop().reverse());
        }
        
        // Ambil elemen pertama dari setiap baris secara terbalik (kiri) ↑
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift());
        }
    }
    return result;
}


console.log(snail([
    [1,2,3],
    [8,9,4],
    [7,6,5]])); //[1,..,9]

console.log(snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]])); //[1, 2, 3,..., 34, 35, 36]