import { IDAO } from './../interface/IDao';
import { Fazenda } from './../entity/fazenda';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class FazendaDao extends BD implements IDAO {
    constructor() {
        super();
    }

    /**
     * Método que registra uma fazenda 
     * @param fazenda fazenda a ser cadastrada
     * @param callbackSucess função de sucesso
     * @param callbackError função de erro
     * 
     * 
     */
    saveTerceiro(fazenda: Fazenda, callbackSucess, callbackError) {
        let query = '';
        let params = [fazenda.$cidade];
        this.executeQuery(query, params, response => {
            callbackSucess({ stastus: 200, response: response });
        }, error => {
            callbackError({ status: 500, response: error });
        });
    }

    save(fazenda: Fazenda) {
        let query = "";
        let params = [];

        this.executeQuery(query, params, response => {

        }, error => {

        });
    }

    delete() { }

    update() { }

    find() { }
}