import { Pesagem } from './../entity/pesagem';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class PesagemDao extends BD implements IDAO {
    constructor() {
        super();
    }
    save(pesagem: Pesagem) {
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