//WPU Programming Challenge
//Day 18/366 bonus
//https://www.codewars.com/kata/52449b062fb80683ec000024/

// function generateHashtag (str) {
//     const splitted = str.split(" ");
//     let words = ['#'];
//     for (x of splitted) {
//         if (x != null) words += x.charAt(0).toUpperCase() + x.slice(1);
//     }
//     if (words.length > 140 || words.length === 1 ) return false;
//     else return words
// }

function generateHashtag (str) {
    const result = str.split(' ').reduce((acc, curr) => {
        return acc + curr.charAt(0).toUpperCase() + curr.slice(1);
    }, '#');
    return (result.length === 1 || result.length > 140) ? false : result;
}

console.log(generateHashtag("   akhir tahun     2024    ! ")); // #AkhirTahun2024!
console.log(generateHashtag("a".repeat(140))) //...aa
