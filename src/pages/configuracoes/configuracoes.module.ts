import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { BotaoComponentModule } from './../../components/botao/botao.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracoesPage } from './configuracoes';

@NgModule({
  declarations: [
    ConfiguracoesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracoesPage),
    MenuHeaderComponentModule, BotaoComponentModule, TitlePageComponentModule
  ],
  exports: [
    ConfiguracoesPage
  ]
})
export class ConfiguracoesPageModule {}
