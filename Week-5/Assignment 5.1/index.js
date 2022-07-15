doTask1=()=>{return new Promise ((res,rej)=>{
    setTimeout(() => {
        res('executing task 1')
    }, 1000);
}).then(val => console.log(val)).catch(val=>console.log(val)).finally(console.log('finally done'))}

doTask2=()=>{return new Promise ((res,rej)=>{

    setTimeout(() => {
        res('executing task 2')
    }, 2000);
}).then(val => console.log(val)).catch(val=>console.log(val)).finally(console.log('finally done'))}

doTask3=()=>{return new Promise((res,rej)=>{
    setTimeout(() => {
        res('executing task 3')
    }, 3000);
}).then(val => console.log(val)).catch(val=>console.log(val)).finally(console.log('finally done'))}



function * genrator_func(){

yield doTask1()
yield doTask2()
yield doTask3()

}

let a=genrator_func()
console.log(a.next())
console.log(a.next())
console.log(a.next())


async function async_await1(){
    let p1 = await doTask1()
    return p1
}

async function async_await2(){

    let p2 = await doTask2()
    return p2
}
async function async_await3(){

    let p3 = await doTask3()
    return p3
}

async_await1()
async_await2()
async_await3()