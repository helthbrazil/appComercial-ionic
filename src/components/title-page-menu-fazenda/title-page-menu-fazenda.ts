import { Component, Input } from '@angular/core';

import { Platform, ActionSheetController, Events } from 'ionic-angular';


@Component({
  selector: 'title-page-menu-fazenda',
  templateUrl: 'title-page-menu-fazenda.html'
})
export class TitlePageMenuFazendaComponent {
  @Input() title: string;
  @Input() funcao: any;
  @Input() optionShow: boolean;
  text: string;

  constructor(public platform: Platform, public actionSheetCtrl: ActionSheetController,
    public events: Events) {
    console.log('Hello TitlePageMenuFazendaComponent Component');
    this.text = 'Hello World';
  }

  function() {
    this.funcao;
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      /*title: 'Opções',*/
      buttons: [
        {
          text: 'Sincronizar',
          icon: !this.platform.is('ios') ? 'sync' : null,
          handler: () => {
            console.log('Sincronizar os dados do aplicativo');
            //   this.synchronize();
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close-circle' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Sair',
          icon: !this.platform.is('ios') ? 'exit' : null,
          handler: () => {
            console.log('Cancel clicked');
            this.events.publish('setRoot', 'LoginPage', {
              dados: 1
            });
          }
        }
      ]
    });
    actionSheet.present();
  }



}
