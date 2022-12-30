import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyInteriorComponent } from './technology-interior/technology-interior.component';



@NgModule({
  declarations: [
    TechnologyInteriorComponent
  ],
  imports: [
    CommonModule,
    

  ],
  exports:[
    TechnologyInteriorComponent
  ],
})
export class TechnologyModule { }
