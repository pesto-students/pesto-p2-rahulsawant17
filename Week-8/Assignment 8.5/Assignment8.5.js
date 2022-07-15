
 var findJudge = function(n, trust) {
    let counts = new Array(n+1).fill(0);

    for(let [p,j] of trust){
        counts[p] -= 1;

        counts[j] += 1;
    }

    for(let i=1; i<counts.length; ++i){
        if(counts[i] === (n-1)){
            return i;
        }
    }
    return -1;
};
// Example 1:Input: n = 2, trust = [[1,2]]Output: 2
n = 2, trust = [[1,2]]
console.log(findJudge(n, trust))
// Example 2:Input: n = 3, trust = [[1,3],[2,3]]Output: 3
// Example 3:Input: n = 3, trust = [[1,3],[2,3],[3,1]]Output: -1
///Time Complexity : O(n)