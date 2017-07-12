import { Component } from '@angular/core';

@Component({
  selector: 'card-rotina-cadastro-animal',
  templateUrl: 'card-rotina-cadastro-animal.html'
})
export class CardRotinaCadastroAnimalComponent {

  text: string;

  constructor() {
    console.log('Hello CardRotinaCadastroAnimalComponent Component');
    this.text = 'Hello World';
  }

}
