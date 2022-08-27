import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MyService} from "../custom.service";
import {LoginService} from "../login.service";
import {LoginDetailsService} from "../login-details.service";

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {

  msg: string = "";

  constructor(public ls: LoginDetailsService) {
  }

  ngOnInit(): void {
  }

  checkUser(loginRef: NgForm) {
    let login = loginRef.value;
    this.msg = this.ls.checkUserDetails(login);
    // if(login.email=='wryan@gmail.com' && login.password == '123'){
    //   this.msg = "successfully login";
    // } else {
    //   this.msg = "failure try once again"
    // }
    loginRef.reset();
  }
}
