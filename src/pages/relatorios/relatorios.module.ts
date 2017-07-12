import { RotinaVendaPageModule } from './../rotina-venda/rotina-venda.module';
import { RotinaSanitarioPageModule } from './../rotina-sanitario/rotina-sanitario.module';
import { RotinaCadastroAnimalPageModule } from './../rotina-cadastro-animal/rotina-cadastro-animal.module';
import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelatoriosPage } from './relatorios';

@NgModule({
  declarations: [
    RelatoriosPage,
  ],
  imports: [
    IonicPageModule.forChild(RelatoriosPage),
    MenuHeaderComponentModule, TitlePageComponentModule
  ],
  exports: [
    RelatoriosPage
  ]
})
export class RelatoriosPageModule { }
