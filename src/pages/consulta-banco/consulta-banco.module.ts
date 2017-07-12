import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { BotaoComponentModule } from './../../components/botao/botao.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaBancoPage } from './consulta-banco';

@NgModule({
  declarations: [
    ConsultaBancoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaBancoPage),
    BotaoComponentModule, MenuHeaderComponentModule
  ],
  exports: [
    ConsultaBancoPage
  ]
})
export class ConsultaBancoPageModule { }
