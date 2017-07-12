import { BDUtil } from './../persistence/bdUtil';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;

  rootPage: string;

  pages: Array<{ title: string, component: string, icone: string }>;
  public about: any = {
    title: "Sobre nós",
    component: 'AboutPage',
    icone: 'assets/svg/about.svg'
  }

  public consulta: any = {
    title: "Consultar Base de Dados",
    component: 'ConsultaBancoPage',
    icone: 'assets/svg/database.svg'
  }

  ionViewDidLoad(){
    
  }

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public bdUtil: BDUtil, public events: Events) {

    let iconeConfiguracoes = 'assets/svg/config.svg';
    let iconePainelPrincipal = 'assets/svg/home.svg';
    let iconeEstoque = 'assets/svg/estoque.svg';
    let iconeRacasEmEstoque = 'assets/svg/cow.svg';
    let iconeUsuario = 'assets/svg/user.svg';
    let iconeRelatorio = 'assets/svg/report.svg';
    let iconeGTA = 'assets/svg/gta.svg';
    let iconeSelecionarFazenda = 'assets/svg/selecionarFazenda.svg';

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Painel Principal', component: 'PrincipalPage', icone: iconePainelPrincipal },
      { title: 'Usuário', component: 'UsuarioPage', icone: iconeUsuario },
      { title: 'Cadastrar GTA', component: 'GtaPage', icone: iconeGTA },
      { title: 'Relatórios', component: 'RelatoriosPage', icone: iconeRelatorio },
      { title: 'Selecionar Fazenda', component: 'FazendaPage', icone: iconeSelecionarFazenda },
      { title: 'Configurações', component: 'ConfiguracoesPage', icone: iconeConfiguracoes }
    ];

    this.events.subscribe('setRoot', (page, params) => {
      this.setRoot(page, params);
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#0b3e5b');
      this.splashScreen.hide();

      /*   // Direcionamento de página principal 
         this.rootPage = "PrincipalPage";
   */
      // Direcionamento de página Login
      //  this.rootPage = "LoginPage";

/*      this.events.publish('setRoot', 'PrincipalPage', {
        dados: 1
      });*/

      this.events.publish('setRoot', 'PrincipalPage', {
        dados: 1
      });
      // inicializar base de dados
      this.bdUtil.createTables();

    });
  }

  setRoot(page, params) {
    this.nav.setRoot(page, { principal: this, params: params });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
