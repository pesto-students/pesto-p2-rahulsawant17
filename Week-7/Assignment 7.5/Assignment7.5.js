// var nextGreaterElements = function (nums) {
//     n = nums.length
//     res = []

//     for (let i = 0; i < n; i++) {
//         let flag = true
//         for (let j = i + 1; j < n; j++) {
//             if (nums[i] < nums[j]) {
//                 res.push(nums[j])
//                 flag = false
//                 break
//             }
//         }
//         if (flag) {
//             res.push(-1)
//         }
//     }
//     return res
// };
var nextGreaterElements = function (nums) {
    n = nums.length
    res = [-1]
    stack=[nums[n-1]]
    for(let i=n-2;i>=0;i--){

      while(nums[i]>stack[stack.length-1]){
        stack.pop()
      }
      if(stack.length==0){
        res.push(-1)
      }else{
      res.push(stack[stack.length-1])

    }stack.push(nums[i])}

    return res.reverse()
  };
// Input:N = 5, arr[] [6 8 0 1 3] Output:8 -1 1 3 -1
arr1 = [6, 8, 0, 1, 3]
console.log(nextGreaterElements(arr1))

//   Input:N = 4, arr[] = [1 3 2 4] Output:3 4 4 -1
arr2 = [1, 3, 2, 4]
console.log(nextGreaterElements(arr2))

//   Input:N = 4, arr[] = [5,4,3,2,1]  Output:-1,-1,-1,-1,-1
arr3 = [5,4,3,2,1]
console.log(nextGreaterElements(arr3))