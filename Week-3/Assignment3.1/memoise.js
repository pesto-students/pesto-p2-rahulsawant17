// Assignment 3.1
function add(args) {
    let sum = 0;
    [...args].forEach(element => {
        sum += element
    });
    return sum
}
function time(fn) {
    console.time();
    console.log(fn);
    console.timeEnd();
}
function memoize(fn) {
    const cache = new Map();
    console.log(cache)
    return function (...args) {
        const key = args.sort()
        let skey = key.toString();
        if (cache.has(skey)) {
            return cache.get(skey)
        }
        cache.set(skey, fn(args))
        return cache.get(skey)
    }
}
const memoizeAdd = memoize(add)
console.log(memoizeAdd(100, 100))
console.log(memoizeAdd(100))
console.log(memoizeAdd(100, 200))
console.log(memoizeAdd(100, 100))