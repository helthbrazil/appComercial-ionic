import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { GtaCardComponent } from './gta-card';

@NgModule({
  declarations: [
    GtaCardComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    GtaCardComponent
  ]
})
export class GtaCardComponentModule {}
