import { GtaCardComponentModule } from './../../components/gta-card/gta-card.module';
import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GtaPage } from './gta';

@NgModule({
  declarations: [
    GtaPage,
  ],
  imports: [
    IonicPageModule.forChild(GtaPage), TitlePageComponentModule, MenuHeaderComponentModule, GtaCardComponentModule
  ],
  exports: [
    GtaPage
  ]
})
export class GtaPageModule { }
