import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyInteriorComponent } from './technology-interior/technology-interior.component';
import { NavModule } from '../nav/nav.module';
NavModule


@NgModule({
  declarations: [
    TechnologyInteriorComponent,
  ],
  imports: [
    CommonModule,NavModule
    

  ],
  exports:[
    TechnologyInteriorComponent
  ],
})
export class TechnologyModule { }
