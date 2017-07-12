import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefasPage } from './tarefas';

@NgModule({
  declarations: [
    TarefasPage,
  ],
  imports: [
    IonicPageModule.forChild(TarefasPage),
    MenuHeaderComponentModule
  ],
  exports: [
    TarefasPage
  ]
})
export class TarefasPageModule {}
