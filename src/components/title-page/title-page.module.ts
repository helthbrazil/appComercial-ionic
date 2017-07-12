import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TitlePageComponent } from './title-page';

@NgModule({
  declarations: [
    TitlePageComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TitlePageComponent
  ]
})
export class TitlePageComponentModule {}
