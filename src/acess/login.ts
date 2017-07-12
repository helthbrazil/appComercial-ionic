import { Loading } from './../componentesIonic/loading';
import { Events } from 'ionic-angular';
import { Toast } from './../componentesIonic/toast';
import { HttpConfig } from './../entity/httpConfig';
import { Usuario } from './../entity/usuario';
import { UsuarioLocalStorage } from './../localStorage/usuarioLocalStorage';
import { NetworkUtil } from './../services/networkUtil';
import { HttpUtil } from './../services/httpUtil';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginUtil {

    constructor(public httpUtil: HttpUtil, public networkUtil: NetworkUtil,
        public toast: Toast, public events: Events, public loading: Loading) {

    }

    private closeLoading() {
        Loading.dismissLoading();
    }

    private findData(url: string, headers: any) {
        this.httpUtil.requestGet(url, {}, headers,
            response => {
                this.closeLoading();
                this.events.publish('setRoot', "FazendaPage");

            }, error => {
                this.closeLoading();
                console.error(error);
                this.toast.showToast("Erro ao conectar com servidor. Tente novamente mais tarde.", Toast.BOTTOM, 3000);
            });
    }

    public login(params) {
        this.networkUtil.checkNetwork(response => {
            Loading.showLoading("Buscando usuário", Loading.CRESCENT, undefined);
            var httpConfig = new HttpConfig();
            let headers = {};

            let url = httpConfig.getUrlRequest() + "/auth/login";
            this.httpUtil.requestPostJson(url, params, headers,
                response => {
                    if (response.status == 200) {
                        let dados = JSON.parse(response.data);
                        let token = dados.token;
                        let refreshToken = dados.refreshToken;

                        let url = httpConfig.getUrlRequest() + "/auth/me";
                        let bearer = "Bearer " + token;
                        let headers = {
                            "Authorization": bearer
                        };

                        this.findData(url, headers);

                    } else {
                        this.closeLoading();
                        this.toast.showToast("Erro ao conectar com servidor. Tente novamente mais tarde.", Toast.BOTTOM, 3000);
                    }
                }, error => {
                    this.closeLoading();
                    this.toast.showToast("Usuário ou senha incorretos", Toast.BOTTOM, 3000);
                });
        }, error => {
            this.toast.showToast("O dispositivo não possui conectividade. Verifique o wifi ou os dados móveis", Toast.BOTTOM, 3000);
        });


    }

}