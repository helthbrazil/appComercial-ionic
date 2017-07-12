import { LoginUtil } from './../acess/login';

import { Network } from '@ionic-native/network';
import { NetworkUtil } from './../services/networkUtil';
import { HttpUtil } from './../services/httpUtil';
import { FazendaLocalStorage } from './../localStorage/fazendaLocalStorage';
import { LocalStorage } from './../services/localStorage';
import { UsuarioLocalStorage } from './../localStorage/usuarioLocalStorage';
import { ItemMenuComponentModule } from './../components/item-menu/item-menu.module';
import { Toast } from './../componentesIonic/toast';
import { Loading } from './../componentesIonic/loading';
import { Alertas } from './../componentesIonic/alertas';

import { FazendaDao } from './../dao/fazendaDao';
// CONFIGURAÇÃO DE MÓDULO
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// COMPONENTE PRINCIPAL
import { MyApp } from './app.component';

// RECURSOS NATIVOS
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';

// SERVIÇOS
import { TransitionPage } from './../services/transitionPage';
import { BDUtil } from './../persistence/bdUtil';
import { BD } from './../persistence/bd';

// DAO
import { BdDao } from './../dao/BD';
import { BotaoComponent } from '../components/botao/botao';
import { ItemMenuComponent } from '../components/item-menu/item-menu';
import { MenuHeaderComponent } from '../components/menu-header/menu-header';
import { TitlePageComponent } from '../components/title-page/title-page';
import { ItemAboutComponent } from '../components/item-about/item-about';
import { TabsComponent } from '../components/tabs/tabs';
import { ItemAnimalComponent } from '../components/item-animal/item-animal';
import { TitlePageMenuFazendaComponent } from '../components/title-page-menu-fazenda/title-page-menu-fazenda';
import { ItemOrganizacaoComponent } from '../components/item-organizacao/item-organizacao';
import { ItemFazendaComponent } from '../components/item-fazenda/item-fazenda';
import { TitlePageMenuFazendaSelecaoComponent } from '../components/title-page-menu-fazenda-selecao/title-page-menu-fazenda-selecao';
import { GtaCardComponent } from '../components/gta-card/gta-card';
import { ItemRotinaComponent } from '../components/item-rotina/item-rotina';
import { CardProtocoloSanitarioComponent } from '../components/card-protocolo-sanitario/card-protocolo-sanitario';
import { CardRotinaVendaComponent } from '../components/card-rotina-venda/card-rotina-venda';
import { CardRotinaCadastroAnimalComponent } from '../components/card-rotina-cadastro-animal/card-rotina-cadastro-animal';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ItemMenuComponentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativePageTransitions, NativePageTransitions, TransitionPage, SQLite, SQLitePorter,
    BDUtil, BD, BdDao, FazendaDao, Alertas, Loading, Toast, LocalStorage, UsuarioLocalStorage,
    FazendaLocalStorage, HttpUtil, Network, NetworkUtil, LoginUtil
  ]
})
export class AppModule { }
