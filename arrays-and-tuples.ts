// array without declaring datatype
var arr1 = [1, 2.3];

// arrays with declaring datatype
var arr2: number[];
arr2 = [1.2, 3,];

arr2.push(4);

var last: number;
last = arr2.pop();
console.log(last);

// flexible array having multiple datatypes

var myArr = [1, "hello", true, 20.50];

// Tuples
// if I want 1st element is string and 2nd element is boolean then we shall go for tuples

var myTuple: [string, boolean];
myTuple = ['yatin', true];
myTuple.push('ranga', true);
