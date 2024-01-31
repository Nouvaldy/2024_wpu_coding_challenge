//WPU Programming Challenge
//Day 4/366
//https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

// function smash (x) {
// if(x.length>0){
//    let result = x[0]; 
//    for(let i=1; i<x.length; i++){
//     result += (" "+x[i]);
//    }
//    return result
// }
// else
//     return "" 
//  };

function smash (x){
    return x.join(" ")
}

 console.log(smash(["this", "is", "a", "really", "long", "sentence"]))