import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-rotina',
  templateUrl: 'item-rotina.html'
})
export class ItemRotinaComponent {
  @Input() label: string;
  @Input() icone: String;
  constructor() {

  }

}
