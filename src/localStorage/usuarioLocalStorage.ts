import { Usuario } from './../entity/usuario';
import { LocalStorage } from './../services/localStorage';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioLocalStorage {
    private readonly key = "usuario";
    constructor(public localStorage: LocalStorage) {

    }

    public save(usuario: Usuario) {
        this.localStorage.setItem(this.key, JSON.stringify(usuario.toJSONObject()));
    }

    public get(): Usuario {
        let stringUsuario = this.localStorage.getItem(this.key);
        if (stringUsuario) {
            let usuario = new Usuario();
            return usuario.jsonToObject(JSON.parse(stringUsuario));
        } else {
            return undefined;
        }
    }

    public remove() {
        this.localStorage.removeItem(this.key);
    }

}