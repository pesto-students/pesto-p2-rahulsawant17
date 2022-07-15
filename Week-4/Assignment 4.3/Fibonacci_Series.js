function fibonacci(num) {
    i = 0;
    fe=0;
    se=1;
    const iter = {
        [Symbol.iterator]() {
            return this
        },
        next() {
            if (i==0){
                ++i
                return { value: 0, done:  i > num } }
            if (i==1){
                ++i
                return { value: 1, done:  i > num }}
            if (i>=2){
                ++i
            cur=fe+se,fe=se,se=cur
            return { value: cur, done: i > num }
            }

        }
    }
    return iter
}


for (const ele of fibonacci(13)) {

    console.log(ele)
}
