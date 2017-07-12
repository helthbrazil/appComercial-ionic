import { TransitionPage } from './../../services/transitionPage';
import { LoginUtil } from './../../acess/login';
import { NetworkUtil } from './../../services/networkUtil';
import { HttpUtil } from './../../services/httpUtil';
import { FazendaLocalStorage } from './../../localStorage/fazendaLocalStorage';
import { UsuarioLocalStorage } from './../../localStorage/usuarioLocalStorage';
import { Fazenda } from './../../entity/fazenda';
import { Usuario } from './../../entity/usuario';
import { Loading } from './../../componentesIonic/loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  componentePai: any;
  labelButtonEstoque = "ENTRAR";
  corButton = "intergado";

  public formulario: any = {
    username: "",
    password: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loading: Loading, public event: Events,
    public fazendaLocalStorage: FazendaLocalStorage, public httpUtil: HttpUtil,
    public networkUtil: NetworkUtil, public loginUtil: LoginUtil,
    public pageTansition: TransitionPage) {

  }
  
  ionViewDidLoad() {
    this.pageTansition.setTransitionFade();
  }

  login(form) {
    this.loginUtil.login(form.value);
  }
  createUser() {
    let fazenda = new Fazenda();
    fazenda.$cidade = "Belo Horizonte";
    fazenda.$cnpj = "231323123123";
    fazenda.$email = "hebert@gmail.com";
    fazenda.$estadoId = 232;
    fazenda.$nome = "Fazenda Hebert";
    fazenda.$proprietario = "Hebert";

    this.fazendaLocalStorage.save(fazenda);
  }
  getUser() {
    console.log(this.fazendaLocalStorage.get());
  }

  testeGet() {
    this.httpUtil.requestGet("https://viacep.com.br/ws/32223080/json/", {}, {}, response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }

  testeLogin() {
    let params: any = {};
    params.username = "luciano.morgan";
    params.password = "dsm123";

    this.loginUtil.login(params);
  }

  testePost() {
    let dados: any = {};
    dados.codProduto = 23;
    dados.observacao = "observação teste";
    dados.qtdItens = 3;
    this.httpUtil.requestPostJson("http://192.168.99.100:8010/orcamento/solicitar", dados, {},
      response => {
        console.log(response);
      }, error => {
        console.error(error);
      });
  }

  testeConectividade() {
    this.networkUtil.checkNetwork(response => {
      if (response) {
        if (response.status == true) {
          console.log(response.message);
        }
      }
    }, error => {
      console.error(error.message);
    });
  }
}
