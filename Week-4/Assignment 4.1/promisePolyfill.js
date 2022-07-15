function getNumber() {
    return  Math.floor(Math.random() * 1000)

}

const pending=0;
const fulfilled=1;
const rejected=2;

function custPromise(executor){

    let state=pending
    let value=null

    function resolve(result){
        if (state!==pending)return;
        state=fulfilled
        value=result

    }
    function reject(err){
        if (state!==pending)return;
        state=rejected
        value=err

    }
    this.then=function(success){
        if(state===fulfilled){
            success(value)
        }
        return this
    }
    this.catch=function(failure){
        if(state===rejected){
            failure(value)
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
let p2 = new custPromise((resolve, reject) => {
    let n=getNumber()

    if (n % 5 == 0) {
        reject(`The promise is rejected with value ${n}`)
    } else {
        resolve(`The promise is resolved with value ${n}`) }

})
p.then((data)=>{console.log(data)}).catch((data)=>{console.error(data)})
p2.then((data)=>{console.log(data)}).catch((data)=>{console.error(data)})