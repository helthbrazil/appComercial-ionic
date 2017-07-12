import { Gta } from './../../entity/gta';
import { TransitionPage } from './../../services/transitionPage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-gta',
  templateUrl: 'cadastro-gta.html',
})
export class CadastroGtaPage {
  public labelButton = "Salvar GTA";
  public nomeFazenda = "Nome da Fazenda";
  public titulo = "Cadastrar GTA";
  public icone = "assets/svg/gtaBlue.svg";
  public showIcon = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public transition: TransitionPage, public events: Events) {
  }

  ionViewWillLeave() {
    this.transition.setTransitionFade();
  }

  salvarGta() {
    let gta = new Gta();
    gta.$data = new Date();
    gta.$descricao = "Descrição de GTA";
    gta.$fazendaDestinoId = 1;
    gta.$fazendaOrigemId = 2;
    gta.$id = 1;
    gta.$idServidor = 2;
    gta.$numero = '2123123123';
    gta.$quantidadeDeAnimais = 50;
    gta.$tipo = Gta.ENTRADA;

    this.navCtrl.pop();
    this.events.publish('atualizarGtas', gta);
  }

}
