import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rotinas',
  templateUrl: 'rotinas.html',
})
export class RotinasPage {
  public iconeSanitario = "assets/svg/vacina.svg";
  public iconeVenda = "assets/svg/venda.svg";
  public iconeCadastroAnimal = "assets/svg/cadastroAnimal.svg";

  public labelSanitario: string = "Protocolos Sanitários";
  public labelVenda: string = "Rotinas De Vendas";
  public labelCadastro: string = "Rotinas de Cadastro";
  public titulo = "Nome da Fazenda";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RotinasPage');
  }

  navigateToRotinaPage(reportCod: number) {
    switch (reportCod) {
      case 1:
        this.navCtrl.push("RotinaCadastroAnimalPage");
        break;
      case 2:
        this.navCtrl.push("RotinaSanitarioPage");
        break;
      case 3:
        this.navCtrl.push("RotinaVendaPage");
        break;
      default:
        this.navCtrl.push("RotinaCadastroAnimalPage");
        break;
    }
  }

}
