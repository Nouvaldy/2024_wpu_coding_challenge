function countBy(x, n) {
    let result = [];

    for(i=1;i<=n;i++){
    result.push(x*i)
    }
  
    return result;
  }

  console.log(countBy(9,4))