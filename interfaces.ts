interface Person {
    firstName: string;
    lastName: string;

    getFullName(): string;
}

class InterfaceImplement implements Person {
    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName + this.lastName;
    }

}

let aPerson: Person = new InterfaceImplement();

// this is duck typing

let duckTyping = {
    firstName: "hello",
    lastName: "world",
    getFullName: () => "test"
};

aPerson = duckTyping;