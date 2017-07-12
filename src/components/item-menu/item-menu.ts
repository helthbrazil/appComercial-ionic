import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-menu',
  templateUrl: 'item-menu.html'
})
export class ItemMenuComponent {
  @Input() icone: string;
  @Input() titulo: string;
  text: string;

  constructor() {
    console.log('Hello ItemMenuComponent Component');
    this.text = 'Hello World';
  }

}
