import { Component } from '@angular/core';

/**
 * Generated class for the CardProtocoloSanitarioComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'card-protocolo-sanitario',
  templateUrl: 'card-protocolo-sanitario.html'
})
export class CardProtocoloSanitarioComponent {

  text: string;

  constructor() {
    console.log('Hello CardProtocoloSanitarioComponent Component');
    this.text = 'Hello World';
  }

}
