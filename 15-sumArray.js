//WPU Programming Challenge
//Day 15/366
//https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
    if (array === null || array.length <= 2) return 0;
    return array
        .sort((a,b) => a-b ) //diurutin kecil ke besar
        .slice(1,-1) // dibuang yg terkecil dan terbesar
        .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([3,5,1,10,4,6,8,9,2,7])); // 2 + .. + 9 = 27