import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rotina-cadastro-animal',
  templateUrl: 'rotina-cadastro-animal.html',
})
export class RotinaCadastroAnimalPage {
  public titulo:string = "Rotina de Cadastro Animal";
  public icone = "assets/svg/cadastroAnimal.svg";
  public nomeDaFazenda = "Nome da Fazenda";
  public corCabecalho = "ocean";
  public hideIcon = true;
  public labelColor = "white";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RotinaCadastroAnimalPage');
  }

  navigateToAddAnimals(){
    
  }

}
