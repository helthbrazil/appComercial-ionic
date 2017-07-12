import { Component } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  text: string;
  tab1Root = 'TarefasPage';
  tab2Root = 'AnimaisPage';
  tab3Root = 'RotinasPage';

  constructor() {
  }

}
