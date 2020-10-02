// any type can store any type of data in it
var a: any; // var a:
a = 10;
a = true;
a = "sample string";
console.log(a);

// union type is a used when we have to restrict a variable for few types

var b: number | boolean;
b = 10;
console.log(b);

b = true;
console.log(b);

