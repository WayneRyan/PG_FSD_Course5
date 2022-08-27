console.log("Welcome to Typescript program");

let a:number = 100;
let fname:string = "Raj Deep";
let result:boolean = true;
let msg:any = 10;
console.log(a);
console.log(fname);
console.log(result);
console.log(msg);

function add(a:number, b:number){
    console.log(a+" "+b);
}

add(10,20);

function sayHello(): string {
    return "Welcome";
}

function empInfo(id:number,name:string,age:number = 18){
    console.log("id is "+id+" name is "+name+" age is "+age);
}

empInfo(101,"Ramesh");

// Rest parameter : this parameter is used to receive 0, 1 or many values.

function employeeDetails(id:number, name:string, salary:number, ...skillset:string[]){

}

employeeDetails(1,"Ravi", 12000, "C");
employeeDetails(2,'Ramesh', 16000);
employeeDetails(3,'Ajay',18000,"C","C++");