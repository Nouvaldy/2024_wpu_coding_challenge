//WPU Programming Challenge
//Day 20/366 bonus
//my first kyu5
//https://www.codewars.com/kata/550f22f4d758534c1100025a/

// function dirReduc(arr) {
//     //base case
//     if (!(arr.join(' ').includes("NORTH SOUTH")
//         || arr.join(' ').includes("SOUTH NORTH")
//         || arr.join(' ').includes("WEST EAST")
//         || arr.join(' ').includes("EAST WEST"))) {
//         return arr;
//     }

//     const opp = {'NORTH':'SOUTH',
//         'SOUTH':'NORTH',
//         'WEST':'EAST',
//         'EAST':'WEST'};
//     let result = [];

//     //rekursif case
//     for (i=0; i < arr.length; i++) {
//         (arr[i] !== opp[arr[i+1]]) ? result.push(arr[i]) : i +=1;
//     }    
//     return dirReduc(result);
// }

function dirReduc(arr) {
    const opposite = {
      'NORTH': 'SOUTH',
      'SOUTH': 'NORTH',
      'EAST': 'WEST',
      'WEST': 'EAST'
    };
  
    let stack = [];
  
    for (let dir of arr) {
      if (stack[stack.length - 1] === opposite[dir]) {
        stack.pop();
      } else {
        stack.push(dir);
      }
    }
  
    return stack;
}  

console.log(dirReduc(["SOUTH","NORTH","WEST","EAST","SOUTH","NORTH","NORTH","EAST","WEST","EAST","NORTH","SOUTH","WEST","EAST"])); // [ 'NORTH', 'EAST' ]