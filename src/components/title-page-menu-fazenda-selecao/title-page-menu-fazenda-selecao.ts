import { Component } from '@angular/core';

@Component({
  selector: 'title-page-menu-fazenda-selecao',
  templateUrl: 'title-page-menu-fazenda-selecao.html'
})
export class TitlePageMenuFazendaSelecaoComponent {
  title: string;
  text: string;

  constructor() {
    console.log('Hello TitlePageMenuFazendaSelecaoComponent Component');
    this.text = 'Hello World';
  }

}
