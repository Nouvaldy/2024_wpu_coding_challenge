//WPU Programming Challenge
//Day 2/366 kita ubah ya
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d

function reverseSeq(n){
    result=[];
    for(i=n; i>=1; i--){
        result.push(i)
}
  return result;
}

  console.log(reverseSeq(3))