import { RotinaVendaPageModule } from './../rotina-venda/rotina-venda.module';
import { RotinaSanitarioPageModule } from './../rotina-sanitario/rotina-sanitario.module';
import { RotinaCadastroAnimalPageModule } from './../rotina-cadastro-animal/rotina-cadastro-animal.module';
import { ItemRotinaComponentModule } from './../../components/item-rotina/item-rotina.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotinasPage } from './rotinas';

@NgModule({
  declarations: [
    RotinasPage,
  ],
  imports: [
    IonicPageModule.forChild(RotinasPage),
    MenuHeaderComponentModule, ItemRotinaComponentModule, RotinaCadastroAnimalPageModule,
    RotinaSanitarioPageModule, RotinaVendaPageModule
  ],
  exports: [
    RotinasPage
  ]
})
export class RotinasPageModule { }
