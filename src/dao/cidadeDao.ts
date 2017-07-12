import { Cidade } from './../entity/cidade';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class CidadeDao extends BD implements IDAO {
    constructor() {
        super();
    }
    save(cidade: Cidade) {
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