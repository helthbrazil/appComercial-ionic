import { IDAO } from './../interface/IDao';
import { Capim } from './../entity/capim';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class CampimDao extends BD implements IDAO {
    constructor() {
        super();
    }

    save(capim: Capim) {
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