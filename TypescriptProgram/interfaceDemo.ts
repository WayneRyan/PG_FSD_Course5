//interface with variable and methods
interface Emp {
    id:number;
    name:string;
    age?:number;
}
let emp1:Emp = {id:100,name:"Ravi",age:21};
let emp2:Emp = {id:100, name:"Ramesh"};
let emp3:Emp = {id:200, name:"Kishor"};

class Employee implements Emp {
    id:number=100;
    name:string = "Raj Deep";
    dis(): void {
        console.log("This Abc interface function")
    }
}

interface Bike {
    speed():void;
}

class Pulsar implements Bike {
    public speed(): void {
        console.log("90km/hr");
    }
}

class Honda implements Bike {
    speed(): void {
        console.log("55km/hr");
    }
}

let pu:Bike = new Pulsar();
let ho:Bike = new Honda();

pu.speed();
ho.speed();