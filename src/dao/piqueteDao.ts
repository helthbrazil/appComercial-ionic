import { Piquete } from './../entity/piquete';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class PiqueteDao extends BD implements IDAO {
    constructor() {
        super();
    }
    save(piquete: Piquete) {
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