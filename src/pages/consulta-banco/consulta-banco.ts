import { Loading } from './../../componentesIonic/loading';

import { FazendaDao } from './../../dao/fazendaDao';
import { BdDao } from './../../dao/BD';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consulta-banco',
  templateUrl: 'consulta-banco.html',
})
export class ConsultaBancoPage {
  public titulo = "Consultar Banco";
  public labelButton: string;
  public buttonColor: string;
  public form = {
    query: ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public bdDao: BdDao, public fazendaDao: FazendaDao, public loading: Loading) {
    this.init();
  }

  private init() {
    this.labelButton = "Executar Query";
    this.buttonColor = "intergado";
  }

  teste() {

  }

  teste2() {

  }
  executeQuery() {
    this.bdDao.execute(this.form.query);
  }
}
