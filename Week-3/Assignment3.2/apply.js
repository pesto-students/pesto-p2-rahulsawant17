//Apply
//apply method is similar to call and it takes paramenters as
// an array of elements  rather than positional arguments
// We can use this method where we do not know the number of
//  parameters  beforehand


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var max = Math.max.apply(null, arr)
var min = Math.min.apply(null, arr)
console.log(max)
console.log(min)
