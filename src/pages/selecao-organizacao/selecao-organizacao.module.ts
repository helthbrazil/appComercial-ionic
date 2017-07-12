import { ItemOrganizacaoComponentModule } from './../../components/item-organizacao/item-organizacao.module';
import { TitlePageMenuFazendaComponentModule } from './../../components/title-page-menu-fazenda/title-page-menu-fazenda.module';
import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecaoOrganizacaoPage } from './selecao-organizacao';

@NgModule({
  declarations: [
    SelecaoOrganizacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecaoOrganizacaoPage),MenuHeaderComponentModule, TitlePageComponentModule,
    TitlePageMenuFazendaComponentModule, ItemOrganizacaoComponentModule
  ],
  exports: [
    SelecaoOrganizacaoPage
  ]
})
export class SelecaoOrganizacaoPageModule {}
