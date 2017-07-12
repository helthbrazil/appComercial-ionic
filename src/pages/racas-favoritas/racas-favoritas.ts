import { TransitionPage } from './../../services/transitionPage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-racas-favoritas',
  templateUrl: 'racas-favoritas.html',
})
export class RacasFavoritasPage {
  public titulo = "Raças favoritas";
  public nomeFazenda = "Nome da Fazenda";
  public icone = "assets/svg/configBlue.svg";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pageTansition: TransitionPage) {
  }

  ionViewDidLoad() {
    this.pageTansition.setTransitionSlideLeft();
  }

  ionViewWillLeave() {
    this.pageTansition.setTransitionSlideRight();
  }

}
