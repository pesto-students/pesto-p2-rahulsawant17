// Call
// Call function is used to bind a object to a function,
// the syntax for call function is
// functionname.call(args). The first argument always refers
//  to the object which is being passed.If the
// function accepts any agruments , those can be passed from
// second argument onwards.

function studies() {
    console.log(`${this.fname} ${this.lname} has optional
     subject as ${this.optional}`)
}

var student1 = {
    fname: "rahul",
    lname: "sawant",
    optional: "Maths"
}
var student2 = {
    fname: "nishant",
    lname: "awasthy",
    optional: "Biology"
}

studies.call(student1)
studies.call(student2)