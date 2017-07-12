import { IDAO } from './../interface/IDao';
import { Cadastro } from './../entity/cadastro';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class CadastroDao extends BD implements IDAO {
    constructor() {
        super();
    }

    save(cadastro: Cadastro) {
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