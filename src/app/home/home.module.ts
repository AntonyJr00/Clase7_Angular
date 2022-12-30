import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, NavModule],
  exports: [InicioComponent],
})
export class HomeModule {}
