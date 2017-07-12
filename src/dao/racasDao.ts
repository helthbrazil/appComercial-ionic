import { Raca } from './../entity/racas';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class RacasDao extends BD implements IDAO {
    constructor() {
        super();
    }
    save(raca: Raca) {
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