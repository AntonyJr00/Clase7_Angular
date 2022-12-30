import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TechnologyModule } from './technology/technology.module';TechnologyModule


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TechnologyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
