class Parent {
    greet() {
        console.log("Hi from parent class..!");

    }
}

class Child extends Parent {
    greet() {
        console.log("Hi from child class..!");

    }
}

var a = new Child();
a.greet();

