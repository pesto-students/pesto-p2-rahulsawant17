var maxSubArray = function(nums) {
    maxSum=-Infinity
    crSum=0
    for(let ele of nums){
        if ((crSum+ele)<ele){
            crSum=ele
        }else{
            crSum+=ele
        }
        if(maxSum<crSum){
            maxSum=crSum
        }

    }
    return maxSum
};

console.log(maxSubArray([1, 2, 3, 4, -10]))     //10
console.log( maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  //6
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))   //6
console.log(maxSubArray([1]))   //1
console.log(maxSubArray([-1]))  //-1