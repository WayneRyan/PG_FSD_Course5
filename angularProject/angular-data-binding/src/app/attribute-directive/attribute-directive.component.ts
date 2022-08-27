import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  styleVariable:object = {color:'green'};
  f1: boolean = true;
  f2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeCSSRules() {
    this.f1 = !this.f1;
    this.f2 = !this.f2;
  }
}
