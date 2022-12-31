import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrewModule } from './crew/crew.module';
import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';
import { TechnologyModule } from './technology/technology.module';
import { DestinationModule } from './destination/destination.module';
import { SharedModule } from './destination/shared/shared.module';

import { InicioComponent } from './home/inicio/inicio.component';
import { CrewEngineerComponent } from './crew/crew-engineer/crew-engineer.component';
import { TechnologyInteriorComponent } from './technology/technology-interior/technology-interior.component';
import { HighlightComponent } from './destination/highlight/highlight.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    DestinationModule,
    BrowserModule,
    CrewModule,
    NavModule,
    HomeModule,
    TechnologyModule,
    RouterModule.forRoot([
      { path: 'crew', component: CrewEngineerComponent },
      { path: '', component: InicioComponent },
      { path: 'destino', component: HighlightComponent },
      { path: 'tech', component: TechnologyInteriorComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
