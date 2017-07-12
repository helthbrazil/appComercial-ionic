import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { CardRotinaVendaComponentModule } from './../../components/card-rotina-venda/card-rotina-venda.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotinaVendaPage } from './rotina-venda';

@NgModule({
  declarations: [
    RotinaVendaPage,
  ],
  imports: [
    IonicPageModule.forChild(RotinaVendaPage),MenuHeaderComponentModule,
    CardRotinaVendaComponentModule, TitlePageComponentModule
  ],
  exports: [
    RotinaVendaPage
  ]
})
export class RotinaVendaPageModule {}
