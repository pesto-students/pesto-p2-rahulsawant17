function sort(arr){

    let countMap= new Map()
    countMap.set(0,0)
    countMap.set(1,0)
    countMap.set(2,0)

for(let ele of arr){

    if(countMap.has(ele)===true){
        countMap.set(ele,countMap.get(ele)+1)
    }else{
        countMap.set(ele,1)
    }
}


let arr1=new Array(countMap.get(0)).fill(0)
let arr2=new Array(countMap.get(1)).fill(1)
let arr3=new Array(countMap.get(2)).fill(2)

arr=arr1.concat(arr2).concat(arr3)
return arr
}

console.log(sort([0 ,2 ,1 ,2 ,0]))
console.log(sort([0,1,0]))
console.log(sort([0,1,0,1,2,0,1,2,1,2]))
