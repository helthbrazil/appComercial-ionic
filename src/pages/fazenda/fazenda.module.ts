import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FazendaPage } from './fazenda';

@NgModule({
  declarations: [
    FazendaPage,
  ],
  imports: [
    IonicPageModule.forChild(FazendaPage),
  ],
  exports: [
    FazendaPage
  ]
})
export class FazendaPageModule {}
