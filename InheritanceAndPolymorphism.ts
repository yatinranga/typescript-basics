class Parent {
    greet() {
        console.log("Hi There..!");

    }
}

class Child extends Parent {

}

var a = new Child();
console.log(a.greet());
