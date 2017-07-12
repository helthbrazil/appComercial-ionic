import { Gta } from './../entity/gta';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class GtaDao extends BD implements IDAO {
    constructor() {
        super();
    }
    save(gta: Gta) {
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