import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FrontPageComponent} from "./components/front-page/front-page.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SoftwareDevelopmentComponent} from "./components/software-development/software-development.component";
import {ApplicationSupportComponent} from "./components/application-support/application-support.component";
import {SoftwareSolutionsComponent} from "./components/software-solutions/software-solutions.component";
import {BusinessIntelligenceComponent} from "./components/business-intelligence/business-intelligence.component";
import {EnterpriseSolutionsComponent} from "./components/enterprise-solutions/enterprise-solutions.component";
import {MobilitySolutionsComponent} from "./components/mobility-solutions/mobility-solutions.component";

const appRoutes: Routes = [
  { path: 'front-page', component: FrontPageComponent },
  { path: 'company/contact', component: ContactComponent },
  { path: 'services/software-development', component: SoftwareDevelopmentComponent },
  { path: 'services/application-support', component: ApplicationSupportComponent },
  { path: 'services/software-solutions', component: SoftwareSolutionsComponent },
  { path: 'services/business-intelligence', component: BusinessIntelligenceComponent },
  { path: 'services/enterprise-solutions', component:   EnterpriseSolutionsComponent},
  { path: 'services/mobility-solutions', component:   MobilitySolutionsComponent},
  { path: '', redirectTo: 'front-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
