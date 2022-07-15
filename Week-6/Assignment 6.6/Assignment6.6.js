var threeSumClosest = function(nums, target) {
    nums.sort((c,b)=>{return c-b})
    let diff=Infinity
    let res=0
    for (let ind=0;ind<nums.length;ind++){
        let left=ind+1
        let right=nums.length-1
        while(left<right){
            let summ=nums[ind]+nums[left]+nums[right]
            if (Math.abs(target-summ)<diff){
                diff=Math.abs(target-summ)
                res=summ
            }
            if (summ<target){
                left+=1}
            else{
                right-=1}
        }

    }
    return res


};
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
arr1=[-1,2,1,-4]; target1 = 1;
console.log(threeSumClosest(arr1,target1))
// Input: nums =  [0,0,0],  target = 1.
// Output is 0.
arr2 =  [0,0,0];  target2 = 1
console.log(threeSumClosest(arr2,target2))
// Input: nums =  [1,-1,4,3,2,7]  target = 1
// Output is 2.
arr3 =  [1,-1,-2,-3,7];  target3 =0
console.log(threeSumClosest(arr3,target3))