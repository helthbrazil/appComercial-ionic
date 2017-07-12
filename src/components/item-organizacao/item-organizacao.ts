import { Component } from '@angular/core';

@Component({
  selector: 'item-organizacao',
  templateUrl: 'item-organizacao.html'
})
export class ItemOrganizacaoComponent {

  text: string;

  constructor() {
    console.log('Hello ItemOrganizacaoComponent Component');
    this.text = 'Hello World';
  }
  

}
