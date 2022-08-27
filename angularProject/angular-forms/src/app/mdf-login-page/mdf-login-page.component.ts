import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MyService} from "../custom.service";
import {LoginService} from "../login.service";
import {LoginDetailsService} from "../login-details.service";

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {

  loginRef = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  msg: string = "";

  constructor(public ls:LoginDetailsService) {
  }

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    // if (login.email == "wryan@gmail.com" && login.password == "123"){
    //   this.msg = "Successfully logged in";
    // } else {
    //   this.msg = "Failure to login";
    // }
    this.msg = this.ls.checkUserDetails(login);
    this.loginRef.reset();
  }
}
