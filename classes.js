var Person = /** @class */ (function () {
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
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // method
    Person.prototype.getfullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
// this will give error now bcz we don't have default constructor so we have to make a parametrized constructor
//var aPerson = new Person();
var aPerson = new Person(" ", " ");
aPerson.firstName = "yatin";
aPerson.lastName = "ranga";
console.log(aPerson.firstName + aPerson.lastName);
console.log(aPerson.getfullName());
// if you want to restrict the class variable then
//var bPerson: Person = new Person();
