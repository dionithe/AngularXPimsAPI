import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoonSectionComponent } from './soon-section/soon-section.component';
import { EventCardComponent } from './event-card/event-card.component';
import { SoonPageComponent } from './soon-page/soon-page.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SoonSectionComponent,
    EventCardComponent,
    SoonPageComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
