import { TransitionPage } from './../../services/transitionPage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {
  public titulo = "Relatório";
  public icone = "assets/svg/relatorioBlue.svg";
  public nomeFazenda = "Nome da Fazenda";
  public corCabecalho = "light";
  public showIcon = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pageTansition: TransitionPage) {
  }

  ionViewDidLoad() {
    this.pageTansition.setTransitionFade();
  }

}
