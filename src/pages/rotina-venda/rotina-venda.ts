import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rotina-venda',
  templateUrl: 'rotina-venda.html',
})
export class RotinaVendaPage {
 public titulo:string = "Rotinas de Venda de animais";
 public nomeDaFazenda = "Nome da Fazenda";
 public icone = "assets/svg/venda.svg";
 public corCabecalho = "ocean";
 public hideIcon = true;
 public labelColor = "white";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RotinaVendaPage');
  }

  navigateToAddVenda(){

  }

}
