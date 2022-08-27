console.log("Welcome to Typescript program");
var a = 100;
var fname = "Raj Deep";
var result = true;
var msg = 10;
console.log(a);
console.log(fname);
console.log(result);
console.log(msg);
function add(a, b) {
    console.log(a + " " + b);
}
add(10, 20);
function sayHello() {
    return "Welcome";
}
function empInfo(id, name, age) {
    if (age === void 0) { age = 18; }
    console.log("id is " + id + " name is " + name + " age is " + age);
}
empInfo(101, "Ramesh");
// Rest parameter : this parameter is used to receive 0, 1 or many values.
function employeeDetails(id, name, salary) {
    var skillset = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        skillset[_i - 3] = arguments[_i];
    }
}
employeeDetails(1, "Ravi", 12000, "C");
employeeDetails(2, 'Ramesh', 16000);
employeeDetails(3, 'Ajay', 18000, "C", "C++");
