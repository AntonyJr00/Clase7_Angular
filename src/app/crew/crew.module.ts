import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewEngineerComponent } from './crew-engineer/crew-engineer.component';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [CrewEngineerComponent],
  imports: [CommonModule, NavModule],
  exports: [CrewEngineerComponent],
})
export class CrewModule {}