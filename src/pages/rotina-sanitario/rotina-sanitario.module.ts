import { TitlePageComponentModule } from './../../components/title-page/title-page.module';
import { CardProtocoloSanitarioComponentModule } from './../../components/card-protocolo-sanitario/card-protocolo-sanitario.module';
import { MenuHeaderComponentModule } from './../../components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotinaSanitarioPage } from './rotina-sanitario';

@NgModule({
  declarations: [
    RotinaSanitarioPage,
  ],
  imports: [
    IonicPageModule.forChild(RotinaSanitarioPage),MenuHeaderComponentModule, CardProtocoloSanitarioComponentModule,
    TitlePageComponentModule
  ],
  exports: [
    RotinaSanitarioPage
  ]
})
export class RotinaSanitarioPageModule {}
