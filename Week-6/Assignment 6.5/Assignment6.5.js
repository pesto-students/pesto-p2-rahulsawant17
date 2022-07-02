var finddiffPairs = function(nums, k) {
    let eleLis= new Map();
    let count=0;
    if (k==0){

        for(let ele of nums){

            if (eleLis.has(ele)){
                eleLis.set(ele,eleLis.get(ele)+1)
                console.log(eleLis)
            }
            else{
                eleLis.set(ele,1)
            }
        }
        for (let ele of eleLis.values()){
            if(ele>1){
            count+=1}
        }
        return count
    }
    for(let ele of nums){
        eleLis.set(ele,1)
    }
    for(let ele of eleLis.keys()){
        if (eleLis.has(ele+k)){
                count+=1}
        if (eleLis.has(ele-k)){
            count+=1}
    }
    return count/2

};
res1=finddiffPairs([5, 10, 3, 2, 50, 80],78)
console.log(res1)
res2=finddiffPairs([-10, 20],30)
console.log(res2)
res3=finddiffPairs([-10,-40,-70, 20],30)
console.log(res3)