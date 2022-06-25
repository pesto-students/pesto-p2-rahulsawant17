var nextGreaterElements = function (nums) {
    n = nums.length
    res = []

    for (let i = 0; i < n; i++) {
        let flag = true
        for (let j = i + 1; j < n; j++) {
            if (nums[i] < nums[j]) {
                res.push(nums[j])
                flag = false
                break
            }
        }
        if (flag) {
            res.push(-1)
        }
    }
    return res
};
// Input:N = 5, arr[] [6 8 0 1 3] Output:8 -1 1 3 -1
arr1 = [6, 8, 0, 1, 3]
console.log(nextGreaterElements(arr1))

//   Input:N = 4, arr[] = [1 3 2 4] Output:3 4 4 -1
arr2 = [1, 3, 2, 4]
console.log(nextGreaterElements(arr2))