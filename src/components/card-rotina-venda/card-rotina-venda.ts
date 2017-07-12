import { Component } from '@angular/core';

@Component({
  selector: 'card-rotina-venda',
  templateUrl: 'card-rotina-venda.html'
})
export class CardRotinaVendaComponent {

  text: string;

  constructor() {
    console.log('Hello CardRotinaVendaComponent Component');
    this.text = 'Hello World';
  }

}
