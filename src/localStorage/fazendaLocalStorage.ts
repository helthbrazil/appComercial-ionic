import { LocalStorage } from './../services/localStorage';
import { Fazenda } from './../entity/fazenda';
import { Injectable } from '@angular/core';
@Injectable()
export class FazendaLocalStorage {
    private readonly key = "fazenda";

    constructor(public localStorage:LocalStorage ){

    }

    public save(fazenda: Fazenda) {
        this.localStorage.setItem(this.key, JSON.stringify(fazenda.toJSONObject()));
    }

    public get(): Fazenda {
        let stringFazenda = this.localStorage.getItem(this.key);
        if (stringFazenda) {
            let fazenda = new Fazenda();
            return fazenda.jsonToObject(JSON.parse(stringFazenda));
        } else {
            return undefined;
        }
    }

    public remove() {
        this.localStorage.removeItem(this.key);
    }
}