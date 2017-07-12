import { Morte } from './../entity/morte';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class MorteDao extends BD implements IDAO {
    constructor() {
        super();
    }
    save(morte: Morte) {
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