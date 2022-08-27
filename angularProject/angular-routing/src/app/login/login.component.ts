import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string = "";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(loginRef: NgForm){
    let login = loginRef.value;
    console.log(login);
    if(login.emailid=="wryan@junk.com" && login.password == "123"){
      this.msg = "successfully login";
      sessionStorage.setItem("user",login.emailid);
      this.router.navigate(["dashboard"],{skipLocationChange:true});
    }else {
      this.msg = "Failure try once again";
    }

    /*
    this.ls.checkUser(login).subscribe(result=>{},error=>console.log(error),()=>console.log("completed"))
     */

  }


}
