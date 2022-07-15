

 function isValidBST(root, min=null, max=null){
  if(root === null){
    return true;
  }
  if(min && root.val <= min.val){
    return false;
  }
  if(max && root.val >= max.val){
    return false;
  }

  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
}
//  Example 1:
root1 = [2,1,3]
console.log(isValidBST(root1))//Output: true
//  Example 2:
root2 = [5,1,4,null,null,3,6]
console.log(isValidBST(root2))//Output: false

//Time Complexity : O(V+E)