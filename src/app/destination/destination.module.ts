import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationViewComponent } from './destination-view/destination-view.component';
import { TabComponent } from './tab/tab.component';
import { HighlightComponent } from './highlight/highlight.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [DestinationViewComponent, TabComponent, HighlightComponent],
  imports: [CommonModule, SharedModule],
  exports: [DestinationViewComponent, HighlightComponent],
})
export class DestinationModule {}
