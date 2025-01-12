//day 52/366
//https://www.codewars.com/kata/52bef5e3588c56132c0003bc

// function treeByLevels(rootNode) {
//     if (rootNode === null) return [];

//     let queue = [rootNode];
//     let result = [];

//     while (queue.length > 0) {
//         const node = queue.shift();
//         result.push(node.value);

//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }
//     return result
// }


function treeByLevels(rootNode) {
    let queue = [rootNode];
    let result = [];

    for(i = 0; i<=queue.length; i++) {
        if(queue[i]) {
            result.push(queue[i].value);
            queue.push(queue[i].left, queue[i].right);
        }
    }

    return result
}

class Node { 
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left  = left;
      this.right = right;
    }
  }

const treeOne = new Node(2,new Node(8,new Node(1),new Node(3)),new Node(9,new Node(4),new Node(5)));

console.log(treeByLevels(treeOne)); //[2,8,9,1,3,4,5]



















