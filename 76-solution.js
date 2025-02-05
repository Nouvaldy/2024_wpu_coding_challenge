// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list){
    let result = [];
    let temp = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] + 1 === list[i + 1]) {
        temp.push(list[i]);
        } else {
        temp.push(list[i]);
        if (temp.length > 2) {
            result.push(`${temp[0]}-${temp[temp.length - 1]}`);
        } else {
            result.push(temp.join(','));
        }
        temp = [];
        }
    }
    return result.join(',');
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); // "-6,-3-1,3-5,7-11,14,15,17-20"
