var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.greet = function () {
        console.log("Hi from parent class..!");
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.greet = function () {
        console.log("Hi from child class..!");
    };
    Child.prototype.greetUsingThisGreet = function () {
        this.greet();
    };
    Child.prototype.greetUsingSuperGreet = function () {
        _super.prototype.greet.call(this);
    };
    return Child;
}(Parent));
// var a = new Child();
// a.greetUsingThisGreet();
// a.greetUsingSuperGreet();
var a = new Child();
a.greet();
