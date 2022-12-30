import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TechnologyModule } from './technology/technology.module'

import { CrewModule } from './crew/crew.module';
import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CrewModule, NavModule, HomeModule,TechnologyModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}