import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ChildComponent} from "./child.component";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  //providers: [],
  bootstrap: [AppComponent] // Provides parent component details
})
export class AppModule { }
