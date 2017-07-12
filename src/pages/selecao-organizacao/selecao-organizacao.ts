import { TransitionPage } from './../../services/transitionPage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-selecao-organizacao',
  templateUrl: 'selecao-organizacao.html',
})
export class SelecaoOrganizacaoPage {
  public title = "Selecione uma organização";
  componentePai: any;
  optionShow = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform, public actionSheetCtrl: ActionSheetController,
    public pageTansition: TransitionPage) {
    this.componentePai = this.navParams.get("principal");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecaoOrganizacaoPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      /*title: 'Opções',*/
      buttons: [
        {
          text: 'Sincronizar',
          icon: !this.platform.is('ios') ? 'sync' : null,
          handler: () => {
            console.log('Sincronizar os dados do aplicativo');
            //   this.synchronize();
          }
        }, {
          text: 'Sobre',
          icon: !this.platform.is('ios') ? 'information-circle' : null,
          handler: () => {
            console.log('Archive clicked');
            //        this.openAboutPage();
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close-circle' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Sair',
          icon: !this.platform.is('ios') ? 'exit' : null,
          handler: () => {
            console.log('Cancel clicked');
            //          this.exit();
          }
        }
      ]
    });
    actionSheet.present();
  }

  selecionarOrganizacao() {
    this.navCtrl.push("SelecaoFazendaPage");
  }

}
