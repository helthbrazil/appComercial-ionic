import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'menu-header.html'
})
export class MenuHeaderComponent {
  @Input() title: string;
  text: string;

  constructor() {
    console.log('Hello MenuHeaderComponent Component');
    this.text = 'Hello World';
  }

}
