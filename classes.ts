class Person {

    firstName: string;
    lastName;

    // //constructor
    // constructor() {
    //     this.firstName = " ";
    //     this.lastName = " ";
    // }

    /**
     * if you want more than one constructor in TS then you have to remove the other constructors.
     * In TS unlike any other language you can't overload constructor
     */


    //parameterized constructor
    constructor(firstName: string, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    // method
    getfullName() {
        return this.firstName + " " + this.lastName;
    }
}

// this will give error now bcz we don't have default constructor so we have to make a parametrized constructor
//var aPerson = new Person();

var aPerson = new Person(" ", " ");
aPerson.firstName = "yatin";
aPerson.lastName = "ranga";
console.log(aPerson.firstName + aPerson.lastName);
console.log(aPerson.getfullName());


// if you want to restrict the class variable then
//var bPerson: Person = new Person();
