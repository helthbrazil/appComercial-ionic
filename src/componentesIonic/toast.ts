import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class Toast {
    public static readonly BOTTOM: string = 'bottom';
    public static readonly TOP: string = 'top';
    public static readonly MIDDLE: string = 'middle';

    constructor(public toastCtrl: ToastController) { }

    /**Função que mostra uma pequena mensagem na tela. 
     * O primeiro parâmetro é a mensagem. O segundo é a posição [top, bottom e middle].
     * O terceiro parâmetro é a duração, se o valor for undefined o valor padrão é 2000 milisegundos
    */
    showToast(mesagem: string, posicao: string, duracao: number) {
        if (duracao == undefined) {
            duracao = 2000;
        }
        let toast = this.toastCtrl.create({
            message: mesagem,
            duration: duracao,
            position: posicao
        });

        toast.present(toast);
    }

}