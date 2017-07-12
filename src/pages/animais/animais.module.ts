import { ItemAnimalComponentModule } from './../../components/item-animal/item-animal.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimaisPage } from './animais';

@NgModule({
  declarations: [
    AnimaisPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimaisPage),
    MenuHeaderComponentModule, ItemAnimalComponentModule
  ],
  exports: [
    AnimaisPage
  ]
})
export class AnimaisPageModule { }
