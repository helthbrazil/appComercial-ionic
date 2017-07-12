import { BotaoComponentModule } from './../../components/botao/botao.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage), BotaoComponentModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
