import { Categoria } from './../entity/categoria';
import { IDAO } from './../interface/IDao';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class CategoriaDao extends BD implements IDAO {
    constructor() {
        super();
    }

    save(categoria: Categoria) {
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