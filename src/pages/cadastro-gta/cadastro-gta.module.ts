import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { BotaoComponentModule } from './../../components/botao/botao.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroGtaPage } from './cadastro-gta';

@NgModule({
  declarations: [
    CadastroGtaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroGtaPage), TitlePageComponentModule, MenuHeaderComponentModule,
    BotaoComponentModule
  ],
  exports: [
    CadastroGtaPage
  ]
})
export class CadastroGtaPageModule {}
