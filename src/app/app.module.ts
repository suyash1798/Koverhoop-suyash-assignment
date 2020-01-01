import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SearchpanelComponent} from './components/searchpanel';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Searchapi} from './services/searchapi';
import {HttpClientModule} from '@angular/common/http';
import {DetailpanelComponent} from './components/detailpanel';

@NgModule({
  declarations: [
    AppComponent,
    SearchpanelComponent,
    DetailpanelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Searchapi],
  bootstrap: [AppComponent]
})
export class AppModule { }
