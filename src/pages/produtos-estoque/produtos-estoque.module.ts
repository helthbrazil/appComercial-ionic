import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosEstoquePage } from './produtos-estoque';

@NgModule({
  declarations: [
    ProdutosEstoquePage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosEstoquePage),
    MenuHeaderComponentModule, TitlePageComponentModule
  ],
  exports: [
    ProdutosEstoquePage
  ]
})
export class ProdutosEstoquePageModule {}
