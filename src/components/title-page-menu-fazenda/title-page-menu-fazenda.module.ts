import { MenuHeaderComponentModule } from './../menu-header/menu-header.module';
import { TitlePageComponentModule } from './../title-page/title-page.module';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TitlePageMenuFazendaComponent } from './title-page-menu-fazenda';

@NgModule({
  declarations: [
    TitlePageMenuFazendaComponent
  ],
  imports: [
    IonicModule, MenuHeaderComponentModule
  ],
  exports: [
    TitlePageMenuFazendaComponent
  ]
})
export class TitlePageMenuFazendaComponentModule {}
