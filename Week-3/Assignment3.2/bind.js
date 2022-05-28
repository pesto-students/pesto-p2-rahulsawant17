//BIND
// bind method creates a new function and permanently
// binds the parameters
// passed to the function with 'this' value.

var obj = {
    x: 45,
    getx: function () {
        return this.x
    }
}
//The function becomes unbounded ,
// as it is being executed in global context
var sol = obj.getx
console.log(sol())

// Bind function creates a copy of the function and binds the
// object with the function itself
var sol2 = obj.getx.bind(obj)
console.log(sol2())
