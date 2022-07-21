import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoonSectionComponent } from './soon-section/soon-section.component';
import { EventCardComponent } from './event-card/event-card.component';
import { SoonPageComponent } from './soon-page/soon-page.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { SearchTabComponent } from './search-tab/search-tab.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SoonSectionComponent,
    EventCardComponent,
    SoonPageComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    SearchPageComponent,
    EventDetailsComponent,
    SearchSectionComponent,
    SearchTabComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
