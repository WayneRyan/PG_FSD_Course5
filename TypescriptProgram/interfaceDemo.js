var emp1 = { id: 100, name: "Ravi", age: 21 };
var emp2 = { id: 100, name: "Ramesh" };
var emp3 = { id: 200, name: "Kishor" };
var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 100;
        this.name = "Raj Deep";
    }
    Employee.prototype.dis = function () {
        console.log("This Abc interface function");
    };
    return Employee;
}());
var Pulsar = /** @class */ (function () {
    function Pulsar() {
    }
    Pulsar.prototype.speed = function () {
        console.log("90km/hr");
    };
    return Pulsar;
}());
var Honda = /** @class */ (function () {
    function Honda() {
    }
    Honda.prototype.speed = function () {
        console.log("55km/hr");
    };
    return Honda;
}());
var pu = new Pulsar();
var ho = new Honda();
pu.speed();
ho.speed();
