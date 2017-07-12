import { IDAO } from './../interface/IDao';
import { Animal } from './../entity/animal';
import { BD } from './../persistence/bd';
import { Injectable } from '@angular/core';
@Injectable()
export class AnimalDao extends BD implements IDAO {
    constructor() {
        super();
    }

    public save(animal: Animal) {
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