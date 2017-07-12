import { Component, Input } from '@angular/core';

@Component({
  selector: 'gta-card',
  templateUrl: 'gta-card.html'
})
export class GtaCardComponent {
  @Input() fazendaOrigem: string;
  @Input() fazendaDestino: string;
  @Input() tipoGTAICone: string;
  text: string;

  constructor() {     
 
  }

}
