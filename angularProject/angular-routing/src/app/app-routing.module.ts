import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {LoginComponent} from "./login/login.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {DisplayProductComponent} from "./display-product/display-product.component";

const routes: Routes = [
  {path: "aboutus", component: AboutUsComponent},
  {path: "contactus", component: ContactUsComponent},
  {
    path: "dashboard", component: DashboardComponent, children: [
      {path: "addproduct", component: AddProductComponent},
      {path: "displayproduct", component: DisplayProductComponent}
    ]
  },
  {path: "feedback", component: FeedbackComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
