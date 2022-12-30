import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrewModule } from './crew/crew.module';
import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';
import { TechnologyModule } from './technology/technology.module';

import { CrewEngineerComponent } from './crew/crew-engineer/crew-engineer.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { TechnologyInteriorComponent } from './technology/technology-interior/technology-interior.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CrewModule,
    NavModule,
    HomeModule,
    TechnologyModule,
    RouterModule.forRoot([
      { path: 'crew', component: CrewEngineerComponent },
      { path: 'home', component: InicioComponent },
      { path: 'tech', component: TechnologyInteriorComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
