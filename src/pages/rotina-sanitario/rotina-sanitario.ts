import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rotina-sanitario',
  templateUrl: 'rotina-sanitario.html',
})
export class RotinaSanitarioPage {
  public titulo: string = "Protocolos Sanitários";
  public nomeDaFazenda = "Nome da Fazenda";
  public icone = "assets/svg/vacina.svg";
  public corCabecalho = "ocean";
  public hideIcon = true;
  public labelColor = "white";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RotinaSanitarioPage');
  }

  navigateToAddSanitario() {

  }

}
