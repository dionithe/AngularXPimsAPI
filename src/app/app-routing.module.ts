import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoonPageComponent } from './soon-page/soon-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
    { path: '', component: SoonPageComponent },
    { path: 'search', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
