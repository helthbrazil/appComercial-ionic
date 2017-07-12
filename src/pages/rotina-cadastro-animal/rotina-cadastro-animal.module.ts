import { CardRotinaCadastroAnimalComponentModule } from './../../components/card-rotina-cadastro-animal/card-rotina-cadastro-animal.module';
import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotinaCadastroAnimalPage } from './rotina-cadastro-animal';

@NgModule({
  declarations: [
    RotinaCadastroAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(RotinaCadastroAnimalPage), MenuHeaderComponentModule,TitlePageComponentModule,
    CardRotinaCadastroAnimalComponentModule
  ],
  exports: [
    RotinaCadastroAnimalPage
  ]
})
export class RotinaCadastroAnimalPageModule {}
