import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FrontPageComponent} from "./components/front-page/front-page.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SoftwareDevelopmentComponent} from "./components/software-development/software-development.component";
import {ApplicationSupportComponent} from "./components/application-support/application-support.component";

const appRoutes: Routes = [
  { path: 'front-page', component: FrontPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'software-development', component: SoftwareDevelopmentComponent },
  { path: 'application-support', component: ApplicationSupportComponent },
  { path: '', redirectTo: 'front-page', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
