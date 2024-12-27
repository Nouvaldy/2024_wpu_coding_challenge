//WPU Programming Challenge
//Day 7/366
//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
    let result = [];

    for(i=1;i<=n;i++){
    result.push(x*i)
    }
  
    return result;
  }

  console.log(countBy(9,4)) //[9, 18, 27, 36]