import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';

@Injectable()
export class BdDao extends BD {
    constructor() {
        super();
    }

    execute(query: string) {
        this.executeQuery(query, [], response => {
            let dados = response.rows;
            let lengthOfRows = dados.length;
            let responseQuery = [];
            for (let i = 0; i < lengthOfRows; i++) {
                responseQuery.push(dados.item(i));
            }

            console.log(responseQuery);
        }, error => {
            console.error(error);
        });
    }
}