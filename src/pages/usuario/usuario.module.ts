import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioPage } from './usuario';

@NgModule({
  declarations: [
    UsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioPage),
    MenuHeaderComponentModule, TitlePageComponentModule
  ],
  exports: [
    UsuarioPage
  ]
})
export class UsuarioPageModule { }
