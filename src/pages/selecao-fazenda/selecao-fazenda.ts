import { TransitionPage } from './../../services/transitionPage';
import { PrincipalPage } from './../principal/principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-selecao-fazenda',
  templateUrl: 'selecao-fazenda.html',
})
export class SelecaoFazendaPage {
  labelTitle: string = "Selecione uma Fazenda";
  icone = "assets/svg/cow2.svg";
  componentePai: any;
  optionShow = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
    public pageTansition: TransitionPage) {

  }

  ionViewDidLoad() {
    this.pageTansition.setTransitionFade();
  }

  ionViewWillLeave() {
    this.pageTansition.setTransitionFade();
  }

  selecionarFazenda() {
    /*   var length = this.navCtrl.length();
       for(let i =0 ;i < length - 1 ; i ++){
         this.navCtrl.pop();
       }*/

    this.events.publish('setRoot', 'PrincipalPage', {
      dados: 1
    });
  }
}
