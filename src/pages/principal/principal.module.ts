import { TabsComponentModule } from './../../components/tabs/tabs.module';
import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalPage } from './principal';

@NgModule({
  declarations: [
    PrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPage),
    MenuHeaderComponentModule, TitlePageComponentModule, TabsComponentModule
  ],
  exports: [
    PrincipalPage
  ]
})
export class PrincipalPageModule { }
