import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from './../../node_modules/@agm/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
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


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    FrontPageComponent,
    SiblingsToggleDirective,
    CarouselComponent,
    DataComponent,
    TestemonialsComponent,
    CaseStudiesComponent,
    BorderBottomHoverDirective,
    ContactComponent
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
