function add(a, b) {
    return a + b;
}

var sum = add(1, 2);
console.log(sum);

console.log(add("yatin ", "ranga"));

console.log(add("yatin ", 7));


function add1(a: number, b: number) {
    return a + b;
}

console.log(add1(1, 2));
//now the below statement gives error
//console.log(add1("yatin",7));


// optional parameter in function 
// optional parameter will always in the last

function add2(a, b, c?) {
    if (c == null) {
        return a + b;
    } else {
        return a + b + c;
    }

}

console.log(add2(1, 2));
console.log(add2(1, 2, 3));

/**
 * alternative of defining optional parameter without if else condition
 * if the value is not assiged to the optional parameter the default value 0 will be assigned to it
 */
function add3(a, b, c = 0) {
    return a + b + c;
}

console.log(add3(1, 2));
console.log(add2(1, 2, 3));

// defining what data type will be returned by the function

function new1(): boolean {
    return true;
}


function new2(): number {
    return 1;
}


function new3(): string {
    return "hello";
}