import { Component, Input } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: 'botao.html'
})
export class BotaoComponent {
  @Input() label: string;
  @Input() color: string;
  @Input() disabled: string;
  text: string;

  constructor() {
    console.log('Hello BotaoComponent Component');
    this.text = 'Hello World';
  }

}
