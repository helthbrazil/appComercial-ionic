import { Gta } from './../../entity/gta';
import { Toast } from './../../componentesIonic/toast';
import { TransitionPage } from './../../services/transitionPage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-gta',
  templateUrl: 'gta.html',
})
export class GtaPage {
  public entrada = 'assets/svg/gtaEntrada.svg';
  public saida = 'assets/svg/gtaSaida.svg';
  public labelButton = "Salvar GTA";
  public nomeFazenda = "Nome da Fazenda";
  public titulo = "Cadastrar GTA";
  public icone = "assets/svg/gtaBlue.svg";
  public fazendaOrigem = "Fazenda A";
  public fazendaDestino = "Fazenda B";
  public corCabecalho = "light";
  public showIcon = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public transition: TransitionPage, public events: Events, public toast: Toast) {

  }

  updateGtaList(gta: Gta) {
    console.log(gta);
    this.toast.showToast("Lista de GTA atualizada", Toast.BOTTOM, 3000);
    this.events.unsubscribe('atualizarGtas');
  }


  navigateToAddGTA() {
    this.events.subscribe('atualizarGtas', (gta: Gta) => {
      this.updateGtaList(gta);
    });
    this.navCtrl.push('CadastroGtaPage');
  }
}
