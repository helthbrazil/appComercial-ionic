import { Lote } from './../entity/lote';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class LoteDao extends BD implements IDAO {
    constructor() {
        super();
    }

    save(lote: Lote) {
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