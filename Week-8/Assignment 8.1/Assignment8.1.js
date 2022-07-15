
function calculateTreeHeight(root){
    if (root === null){
      return 0;
    }
    let leftHeight = calculateTreeHeight(root.left);
    let rightHeight = calculateTreeHeight(root.right);
    if (leftHeight > rightHeight){
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
}

class TreeNode{
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function createTree(arr){
    return insertIntoTree(0,arr);
  }

  function insertIntoTree(i,arr){
    let curr = null;
    if(i < arr.length){
      curr = new TreeNode(arr[i]);
      curr.left = insertIntoTree((2*i)+1, arr);
      curr.right = insertIntoTree((2*i)+2, arr);
    }
    return curr;
  }+

  function preorder(root){
    if (root !== null){
      process.stdout.write(root.value.toString() + ' ');
      preorder(root.left);
      preorder(root.right);
    }
  }


root1 = [3,9,20,null,null,15,7]
let inputRoot1 = createTree(root1);
console.log(calculateTreeHeight(inputRoot1));//  Output: 3


root2 = [1,null,2]
let inputRoot2 = createTree(root2);
console.log(calculateTreeHeight(inputRoot2));//  Output: 2
//Time Complexity : O(V+E)