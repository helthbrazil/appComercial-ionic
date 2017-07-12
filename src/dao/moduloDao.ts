import { Modulo } from './../entity/modulo';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class ModuloDao extends BD implements IDAO {
    constructor() {
        super();
    }
    save(modulo: Modulo) {
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