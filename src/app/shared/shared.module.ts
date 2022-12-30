import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    TitleComponent
  ]
})
export class SharedModule { }
