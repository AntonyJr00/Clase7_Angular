import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { TechnologyModule } from './technology/technology.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TechnologyModule,NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
