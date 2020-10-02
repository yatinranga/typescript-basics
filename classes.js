var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var aPerson = new Person();
aPerson.firstName = "yatin";
aPerson.lastName = "ranga";
console.log(aPerson.firstName + aPerson.lastName);
// if you want to restrict the class variable then
var bPerson = new Person();
