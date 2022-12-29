import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrewModule } from './crew/crew.module';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CrewModule, NavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
