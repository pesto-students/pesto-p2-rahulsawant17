var maxProfit = function(prices) {
    let prof=0;
    let min_val=prices[0]
    for(let ele of prices){
        if (ele>min_val && prof<ele-min_val){
            prof=ele-min_val
        }
        if(ele<min_val){
             min_val=ele
        }
    }
    return prof
};
console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([0,0,0,0]))
console.log(maxProfit([7,6,3,1]))
console.log(maxProfit([1,2,3,4,5,6,7]))