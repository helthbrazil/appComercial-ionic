import { TitlePageMenuFazendaSelecaoComponentModule } from './../../components/title-page-menu-fazenda-selecao/title-page-menu-fazenda-selecao.module';
import { ItemFazendaComponentModule } from './../../components/item-fazenda/item-fazenda.module';
import { TitlePageMenuFazendaComponentModule } from './../../components/title-page-menu-fazenda/title-page-menu-fazenda.module';
import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecaoFazendaPage } from './selecao-fazenda';

@NgModule({
  declarations: [
    SelecaoFazendaPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecaoFazendaPage), MenuHeaderComponentModule, TitlePageComponentModule,
    TitlePageMenuFazendaComponentModule, ItemFazendaComponentModule,TitlePageMenuFazendaSelecaoComponentModule
  ],
  exports: [
    SelecaoFazendaPage
  ]
})
export class SelecaoFazendaPageModule { }
