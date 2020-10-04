class Parent {
    greet() {
        console.log("Hi from parent class..!");

    }
}

class Child extends Parent {
    greet() {
        console.log("Hi from child class..!");
    }

    greetUsingThisGreet() {
        this.greet();
    }


    greetUsingSuperGreet() {
        super.greet();
    }
}

// var a = new Child();
// a.greetUsingThisGreet();
// a.greetUsingSuperGreet();

var a: Parent = new Child();
a.greet();

