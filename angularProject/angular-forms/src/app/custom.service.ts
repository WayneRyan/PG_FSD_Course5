
export class MyService {
  checkUserDetails(login: any): string {
    if (login.email == "wryan@gmail.com" && login.password == '123') {
      return "success";
    } else {
      return "failure";
    }
  }
}
