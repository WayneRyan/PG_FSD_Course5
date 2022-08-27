import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  constructor() {
  }

  checkUserDetails(login: any): string {
    if (login.email == "wryan@gmail.com" && login.password == '123') {
      return "successfully logged in";
    } else {
      return "failure try the correct credentials";
    }
  }

}
