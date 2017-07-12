import { Component } from '@angular/core';

@Component({
  selector: 'item-animal',
  templateUrl: 'item-animal.html'
})
export class ItemAnimalComponent {

  text: string;

  constructor() {
    console.log('Hello ItemAnimalComponent Component');
    this.text = 'Hello World';
  }

}
