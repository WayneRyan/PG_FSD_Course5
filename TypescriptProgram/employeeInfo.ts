class Employee {
    constructor(private readonly id:number = 0,
                private readonly name:string = '',
                private readonly salary:number = 0) {}

    displayInfo():void{
        console.log("Employee details ");
        console.log(" id is "+this.id);
        console.log(" name is "+this.name);
        console.log(" salary is "+this.salary);
    }
}

let emp1 = new Employee();
emp1.displayInfo();