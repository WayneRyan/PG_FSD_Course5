import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  showMe: boolean = false;
  msg:string = "Show";
  f3:boolean = false;
  names:Array<string>=['Bob','John','Jack','Jim','Jef','Bill']
  employees:Array<Employee> = [];

  constructor() {
    let emp1 = new Employee(100,"Bob",12000);
    let emp2 = new Employee(101,"Ben",13000);
    let emp3 = new Employee(102,"Bill",14000);
    let emp4 = new Employee(103,"Bambi",15000);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
    this.employees.push(emp4);
  }

  ngOnInit(): void {
  }

  showIt(){
    this.showMe = !this.showMe;
  }

  toggle(): void {
    if(this.f3){
      this.f3 = false;
      this.msg = "Show";
    } else {
      this.f3 = true;
      this.msg = "Hide";
    }
  }

  addEmployee(idRef: any, nameRef: any, salaryRef: any) {
    let emp = new Employee( idRef.value, nameRef.value, salaryRef.value);
    this.employees.push(emp);
    idRef.value = nameRef.value = salaryRef.value = "";
  }
}
