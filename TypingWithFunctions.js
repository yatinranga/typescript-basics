function add(a, b) {
    return a + b;
}
var sum = add(1, 2);
console.log(sum);
console.log(add("yatin ", "ranga"));
console.log(add("yatin ", 7));
function add1(a, b) {
    return a + b;
}
console.log(add1(1, 2));
//now the below statement gives error
//console.log(add1("yatin",7));
// optional parameter in function 
// optional parameter will always in the last
function add2(a, b, c) {
    if (c == null) {
        return a + b;
    }
    else {
        return a + b + c;
    }
}
console.log(add2(1, 2));
console.log(add2(1, 2, 3));
/**
 * alternative of defining optional parameter without if else condition
 */
function add3(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(add3(1, 2));
console.log(add2(1, 2, 3));
