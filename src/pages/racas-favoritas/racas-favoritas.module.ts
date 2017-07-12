import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RacasFavoritasPage } from './racas-favoritas';

@NgModule({
  declarations: [
    RacasFavoritasPage,
  ],
  imports: [
    IonicPageModule.forChild(RacasFavoritasPage),
    MenuHeaderComponentModule, TitlePageComponentModule
  ],
  exports: [
    RacasFavoritasPage
  ]
})
export class RacasFavoritasPageModule {}
