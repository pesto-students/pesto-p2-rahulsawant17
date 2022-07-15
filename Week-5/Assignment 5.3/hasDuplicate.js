// function hasDuplicate(arr){

//     return new Set(arr).size!==arr.length
// }
function hasDuplicate(arr){
    let ma=new Map()
for(let i of arr){
    if (ma.has(i)){
  ma.set(i,ma.get(i)+1)
  }else{
  ma.set(i,1)
  }

}
for(let ele of ma.values()){
  if (ele>1) return false
  else return true
}
}
console.log(hasDuplicate([1,5,-1,4]))
console.log(hasDuplicate([1,1,5,-1,4]))