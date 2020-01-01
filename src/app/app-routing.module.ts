import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchpanelComponent} from './components/searchpanel';


const routes: Routes = [
  {path: '', component: SearchpanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
