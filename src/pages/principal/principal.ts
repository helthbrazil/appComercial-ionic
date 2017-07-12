import { TransitionPage } from './../../services/transitionPage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  public nomeFazenda = "Nome da Fazenda";
  public icone = "assets/svg/homeBlue.svg";
  public titulo = "Painel Principal";

  tab1Root = 'TarefasPage';
  tab2Root = 'AnimaisPage';
  tab3Root = 'RotinasPage';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pageTansition: TransitionPage) {

  }

  ionViewDidLoad() {
    //this.pageTansition.setTransitionFade();
  }

}
