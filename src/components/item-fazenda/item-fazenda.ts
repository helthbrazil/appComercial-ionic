import { Component } from '@angular/core';

/**
 * Generated class for the ItemFazendaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'item-fazenda',
  templateUrl: 'item-fazenda.html'
})
export class ItemFazendaComponent {

  text: string;

  constructor() {
    console.log('Hello ItemFazendaComponent Component');
    this.text = 'Hello World';
  }

}
