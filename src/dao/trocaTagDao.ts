import { TrocaTag } from './../entity/trocaTag';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class TrocaTagDao extends BD implements IDAO {
    constructor() {
        super();
    }
    save(trocaTag: TrocaTag) {
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