// Assignment 3.3

function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
//After execution of the above line , createIncrement function will be evaluated.
// the varaible message will be created as "Count is 0".

increment();
//After execution of the above line the variable will be incremented to 1
increment();
//After execution of the above line the variable will be incremented to 2
increment();
//After execution of the above line the variable will be incremented to 3
log();
//After execution of the above line , the variable message will be logged in the console , with the value
// which was earlier set to "Count is 0" , as it was evaluated before incrementing the variable count.
