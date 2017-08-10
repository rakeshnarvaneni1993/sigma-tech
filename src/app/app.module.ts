import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app.routing';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { SiblingsToggleDirective } from './directives/siblings-toggle.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DataComponent } from './components/data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    FrontPageComponent,
    SiblingsToggleDirective,
    CarouselComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
