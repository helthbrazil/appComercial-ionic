import { Component } from '@angular/core';

/**
 * Generated class for the ItemAboutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'item-about',
  templateUrl: 'item-about.html'
})
export class ItemAboutComponent {

  text: string;

  constructor() {
    console.log('Hello ItemAboutComponent Component');
    this.text = 'Hello World';
  }

}
