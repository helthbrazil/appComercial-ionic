import { TransitionPage } from './../../services/transitionPage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fazenda',
  templateUrl: 'fazenda.html',
})
export class FazendaPage {
  public minhasFazendas = "SelecaoOrganizacaoPage";
  public outras = "OutraFazendasPage";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pageTansition: TransitionPage) {
  }

  ionViewDidLoad() {
    this.pageTansition.setTransitionFade();
  }

}
