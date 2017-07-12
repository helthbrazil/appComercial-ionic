import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutraFazendasPage } from './outra-fazendas';

@NgModule({
  declarations: [
    OutraFazendasPage,
  ],
  imports: [
    IonicPageModule.forChild(OutraFazendasPage),
  ],
  exports: [
    OutraFazendasPage
  ]
})
export class OutraFazendasPageModule {}
