import { TransitionPage } from './../../services/transitionPage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  public nomeFazenda = "Nome da Fazenda";
  public titulo = "Configurações";
  public icone = "assets/svg/configBlue.svg";
  public corCabecalho = "light";
  public showIcon = true;

  public labelButtonEstoque = "Selecionar Produtos em estoque";
  public labelButtonRacas = "Selecionar Raças Favoritas";
  public corButton = "intergado";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pageTansition: TransitionPage) {
  }

  ionViewDidLoad() {
   // this.pageTansition.setTransitionFade();
  }

  navigateToRacasFavoritas() {
    this.navCtrl.push('RacasFavoritasPage');
  }

  navigateToProdutosEstoque() {
    this.navCtrl.push('ProdutosEstoquePage');
  }

}
