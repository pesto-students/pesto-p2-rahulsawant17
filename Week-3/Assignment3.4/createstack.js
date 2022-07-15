
// Assignment 3.4
function createStack() {
    let items = [];
    return {
        // items:[],
        push(item) { items.push(item); },
        pop() { return items.pop(); }

    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());// => 5
console.log(stack.items);// => undefined
stack.items= [10,100,1000];// this will not change the local stack.
console.log(stack.items);