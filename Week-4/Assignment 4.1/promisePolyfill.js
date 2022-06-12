function getNumber() {
    return  Math.floor(Math.random() * 1000)

}

const pending=0;
const fulfilled=1;
const rejected=2;

function custPromise(executor){

    let state=pending
    let value=null
    let handlers=[]
    let catchers=[]
    function resolve(result){
        if (state!==pending)return;
        state=fulfilled
        value=result
        handlers.forEach((h)=>h(value))
    }
    function reject(err){
        if (state!==pending)return;
        state=rejected
        value=err
        catchers.forEach((c)=>c(value))
    }
    this.then=function(success){
        if(state===fulfilled){
            success(value)
        }else{
            handlers.push(success)
        }
        return this
    }
    this.catch=function(failure){
        if(state===rejected){
            failure(value)
        }
        else{
            catchers.push(failure)
        }
        return this
    }
executor(resolve,reject)

}


let p = new custPromise((resolve, reject) => {
    let n=getNumber()

    if (n % 5 == 0) {
        reject(`The promise is rejected with value ${n}`)
    } else {
        resolve(`The promise is resolved with value ${n}`) }

})
p.then((data)=>{console.log(data)}).catch((data)=>{console.error(data)})