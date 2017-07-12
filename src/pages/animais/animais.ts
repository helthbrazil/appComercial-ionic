import { Alertas } from './../../componentesIonic/alertas';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-animais',
  templateUrl: 'animais.html',
})
export class AnimaisPage {
  @ViewChild("content") content: Content;
  items;
  itemsOriginal;
  botaoMarcarTodos: boolean;
  todosMarcados: boolean;
  pesquisados;
  pesquisar: boolean;
  padding: string;

  public titulo = "Nome da Fazenda";
  labelSearch = "Buscar Animal";
  autoCompleteSearch = "true";
  cancelButtonSearch = "true";
  type = "text";
  autoCorrect = "on";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertas: Alertas) {
    this.padding = "20px";
    this.pesquisar = false;
    this.titulo = "Nome da Fazenda";
    this.items = new Array<any>();
    this.itemsOriginal = new Array<any>();
    this.buscarAnimais();
  }


  abater(item) {
    //   this.alertas.simpleAlert("Morte", "Abater animal de tag " + item.label);
  }

  trocarTag(item) {
    //   this.alertas.simpleAlert("Troca Tag", "Trocar tag do animal de tag " + item.label);
  }

  pesar(item) {
    //   this.alertas.simpleAlert("Pesagem", "Pesar animal de tag " + item.label);
  }

  ionClear(event) {
    console.log(event);
  }

  private tooglePesquisar() {
    if (this.pesquisar) {
      this.pesquisar = false;
      this.reset();
    }
    else
      this.pesquisar = true;
    this.content.resize();
  }

  inicializar() {
    /*   this.platform.ready().then(() => {
         this.buscarProdutos();
       });
       this.platform.registerBackButtonAction(() => {
         this.navCtrl.pop();
       });*/
  }

  public selecionarAnimal(animal) {
    animal.backgroundColor = "primary";
    animal.color = "branco";
    // selecionar animal
  }

  private cadastrarAnimal() {
    //   this.navCtrl.push(CadastroAnimais);
  }

  preencherAnimaisFicticios(lengthOfAnimais) {
    let tag: number = 9923923120312;
    for (let i = 0; i < lengthOfAnimais; i++) {
      tag++;
      this.itemsOriginal.push({
        checked: false,
        label: '' + tag,
        backgroundColor: 'branco',
        color: 'primary'
      });
    }
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }

  verificarMarcados() {
    let allChecked: boolean = true;
    this.todosMarcados = false;
    let quantidade = this.itemsOriginal.length;

    for (var i = 0; i < quantidade; i++) {
      if (this.itemsOriginal[i].checked == false) {
        allChecked = false;
        i = quantidade;
      }
    }

    if (allChecked == true) {
      this.todosMarcados = true;
    }
    this.botaoMarcarTodos = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPreferidosPage');
  }

  private reset() {
    this.items = this.itemsOriginal.slice();
  }

  async buscarAnimais() {
    this.preencherAnimaisFicticios(100);
    this.reset();
  }

  marcarTodos() {
    this.todosMarcados = this.verificarTodoSelecionadosPesquisa();
    let quantidadeItensPesquisados = this.items.length;
    let quantidade = this.itemsOriginal.length;

    if (quantidadeItensPesquisados == 0) {

    } else if (quantidadeItensPesquisados == quantidade) {
      if (this.todosMarcados == true) {
        for (var i = 0; i < quantidade; i++) {
          this.itemsOriginal[i].checked = false;
        }
      } else {
        for (var i = 0; i < quantidade; i++) {
          this.itemsOriginal[i].checked = true;
        }
      }
      this.verificarMarcados();
    } else {

      if (this.todosMarcados == true) {
        for (var i = 0; i < quantidadeItensPesquisados; i++) {
          this.itemsOriginal[this.items[i].index].checked = false;
          this.items[i].checked = false;
        }
        this.todosMarcados = false;
      } else {
        for (var i = 0; i < quantidadeItensPesquisados; i++) {
          this.itemsOriginal[this.items[i].index].checked = true;
          this.items[i].checked = true;
        }
        this.todosMarcados = true;
      }

    }
  }

  private verificarTodoSelecionadosPesquisa() {
    let quantidade = this.items.length;
    let todosSelecionados = true;
    if (quantidade == 0) {
      todosSelecionados = false;
      this.botaoMarcarTodos = true;
    } else {
      this.botaoMarcarTodos = false;
      for (var i = 0; i < quantidade; i++) {
        if (this.items[i].checked == false) {
          todosSelecionados = false;
          break;
        }
      }
    }

    return todosSelecionados;
  }

  salvarProdutosFavoritos() {
    // salvar no banco e voltar para a tela de configuraÃ§Ãµes
    let selecionados = new Array<any>();
    let lengthSelecionados = this.itemsOriginal.length;

    for (var i = 0; i < lengthSelecionados; i++) {
      if (this.itemsOriginal[i].checked == true) {
        selecionados.push(this.itemsOriginal[i]);
      }
    }

    //  this.produtoDao.saveFavoritos(selecionados);
    console.log(selecionados);
    //this.navCtrl.pop();
  }

  atualizar(item) {
    if (item.checked == false) {
      item.checked = true;
      this.itemsOriginal[item.index].checked = true;
    } else {
      item.checked = false;
      this.itemsOriginal[item.index].checked = false;
    }

    if (this.itemsOriginal.length == this.items.length) {
      this.verificarMarcados();
    } else if (this.items.length > 0) {
      let todosSelecionados = this.verificarTodoSelecionadosPesquisa();
      if (todosSelecionados == true) {
        this.todosMarcados = true;
      } else {
        this.todosMarcados = false;
      }
    }
    this.botaoMarcarTodos = false;
  }

  getItems(ev) {
    this.reset();
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        this.pesquisados = item.label.toLowerCase().indexOf(val.toLowerCase()) > -1;
        return this.pesquisados;
      })
    }
    this.items.sort(function (a, b) {
      return a.label.localeCompare(b.label);
    });
    let marcados = this.verificarTodoSelecionadosPesquisa();
    if (marcados == true) {
      this.todosMarcados = true;
    } else {
      this.todosMarcados = false;
    }
  }

  addAnimal() {
    this.alertas.confirmationAlert("Cadastro Animal", "Deseja utilizar uma rotina já cadastrada?", "Não", "Sim", response => {
      if (response) {
        if (response.cod == 1) {
          console.log("Usar rotina");
        } else {
          console.log("Não usar rotina");
        }
      }
    });
  }


}
