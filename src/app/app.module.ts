import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from './../../node_modules/@agm/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app.routing';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { SiblingsToggleDirective } from './directives/siblings-toggle.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DataComponent } from './components/data/data.component';
import { TestemonialsComponent } from './components/testemonials/testemonials.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { BorderBottomHoverDirective } from './directives/border-bottom-hover.directive';
import { ContactComponent } from './components/contact/contact.component';
import {FormsModule} from "@angular/forms";
import { ScrollDirective } from './directives/scroll.directive';
import { SoftwareDevelopmentComponent } from './components/software-development/software-development.component';
import { ApplicationSupportComponent } from './components/application-support/application-support.component';
import { SoftwareSolutionsComponent } from './components/software-solutions/software-solutions.component';
import { BusinessIntelligenceComponent } from './components/business-intelligence/business-intelligence.component';
import { EnterpriseSolutionsComponent } from './components/enterprise-solutions/enterprise-solutions.component';
import { MobilitySolutionsComponent } from './components/mobility-solutions/mobility-solutions.component';
import { CareersComponent } from './components/careers/careers.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FrontPageComponent,
    SiblingsToggleDirective,
    CarouselComponent,
    DataComponent,
    TestemonialsComponent,
    CaseStudiesComponent,
    BorderBottomHoverDirective,
    ContactComponent,
    ScrollDirective,
    SoftwareDevelopmentComponent,
    ApplicationSupportComponent,
    SoftwareSolutionsComponent,
    BusinessIntelligenceComponent,
    EnterpriseSolutionsComponent,
    MobilitySolutionsComponent,
    CareersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfw9-VJjreAeJ3wC_QipD-SvIuGIrwCL8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
