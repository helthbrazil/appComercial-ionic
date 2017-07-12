import { Estado } from './../entity/estado';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class EstadoDao extends BD implements IDAO {
    constructor() {
        super();
    }
    save(estado: Estado) {
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