var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        if (salary === void 0) { salary = 0; }
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.displayInfo = function () {
        console.log("Employee details ");
        console.log(" id is " + this.id);
        console.log(" name is " + this.name);
        console.log(" salary is " + this.salary);
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.displayInfo();
