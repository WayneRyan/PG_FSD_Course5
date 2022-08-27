import {Component} from "@angular/core";
import {AppComponent} from "./app.component";

@Component({
  selector: "my-child-tag",
  templateUrl: "./child.component.html",
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  msg:string = "This is child component";
}
