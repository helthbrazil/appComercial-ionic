import { ItemAboutComponentModule } from './../../components/item-about/item-about.module';
import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    MenuHeaderComponentModule, ItemAboutComponentModule
  ],
  exports: [
    AboutPage
  ]
})
export class AboutPageModule { }
