import { TransitionPage } from './../../services/transitionPage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-produtos-estoque',
  templateUrl: 'produtos-estoque.html',
})
export class ProdutosEstoquePage {
  public titulo = "Produtos Estoque";
  public nomeFazenda = "Nome da Fazenda";
  public icone = "assets/svg/configBlue.svg";
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pageTansition: TransitionPage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosEstoquePage');
    this.pageTansition.setTransitionSlideLeft();
  }

  ionViewWillLeave() {
    this.pageTansition.setTransitionSlideRight();
  }

}
