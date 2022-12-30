import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DestinationModule } from './features/destination/destination.module';
import { DestinationViewComponent } from './features/destination/destination-view/destination-view.component';
import { CrewViewComponent } from './features/crew/crew-view/crew-view.component';

const routes: Routes = [
  {
    path: 'destination',
    component: DestinationViewComponent
  },
  {
    path: '',
    component: CrewViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DestinationModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
