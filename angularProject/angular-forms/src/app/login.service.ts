import { Injectable} from "@angular/core";

@Injectable()
export class LoginService {
  checkUserDetails(login: any): string {
    if (login.email == "wryan@gmail.com" && login.password == '123') {
      return "successfully logged in";
    } else {
      return "failure try the correct credentials";
    }
  }
}
