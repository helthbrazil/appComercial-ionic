import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BotaoComponent } from './botao';

@NgModule({
  declarations: [
    BotaoComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    BotaoComponent
  ]
})
export class BotaoComponentModule {}
