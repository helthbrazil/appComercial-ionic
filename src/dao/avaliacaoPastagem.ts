import { IDAO } from './../interface/IDao';
import { AvaliacaoPastagem } from './../entity/avaliacaoPastagem';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class AvaliacaoPastagemDao extends BD implements IDAO {
    constructor() {
        super();
    }

    save(avaliacaoPastagem: AvaliacaoPastagem) {
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