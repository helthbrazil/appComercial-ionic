import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import 'rxjs/add/operator/map';
import { BD } from '../persistence/bd';

@Injectable()
export class BDUtil extends BD {
    public tablesCreate: Array<string>;
    constructor() {
        super();
        this.tablesCreate = new Array<string>();
    }

    /**
     * Método utilizado para a criação das tabelas a partir de um array de string (CONSULTAS).     * 
     * 
     * */
    createTables() {
        this.createScript();
        setTimeout(() => {
            this.execute(this.tablesCreate, true);
        }, 500)
    }

    destroyTables() {
        let tables = new Array<string>();
        this.execute(tables, false);
    }

    execute(script: Array<string>, create: boolean) {
        let lengthOfTables = script.length;
        for (var i = 0; i < lengthOfTables; i++) {
            this.executeQuery(script[i], {}, (response) => {
                console.log(response);
                if (create)
                    console.log('tabela criada com sucesso');
                else
                    console.log('tabela excluída com sucesso');
            }, (error) => {
                console.error(error);
                console.log('erro ao criar tabela');
            });
        }
    }

    private createScript() {

        //CREATE INDEX IF NOT EXISTS index_name ON table_name (column_name);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS teste(
                nome VARCHAR(100)
            )    
        `);

  /*      this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS fazenda(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                cnpj VARCHAR(100),
                email VARCHAR(200),
                estado_id INTEGER NOT NULL,
                cidade VARCHAR(200),
                FOREIGN KEY(estado_id) REFERENCES estado(id)
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS fazenda_terceiro(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                cnpj VARCHAR(100),
                email VARCHAR(200),
                estado_id INTEGER NOT NULL,
                cidade VARCHAR(200),
                FOREIGN KEY(estado_id) REFERENCES estado(id)
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS categoria(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(100) NOT NULL
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS categoria(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(100) NOT NULL
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS capim(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(100) NOT NULL
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS modulo(
                id INTEGER PRIMARY KEY,
                fazenda_id INTEGER NOT NULL,
                FOREIGN KEY(fazenda_id) REFERENCES fazenda(id) 
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS piquete(
                id INTEGER PRIMARY KEY,
                modulo_id INTEGER NOT NULL,
                nome VARCHAR(200) NOT NULL,
                FOREIGN KEY(modulo_id) REFERENCES modulo(id) 
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS avaliacao_pastagem(
                id INTEGER PRIMARY KEY,
                modulo_id INTEGER NOT NULL,
                piquete_id INTEGER,
                FOREIGN KEY(modulo_id) REFERENCES modulo(id),
                FOREIGN KEY(modulo_id) REFERENCES piquete(id)
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS lote(
                id INTEGER PRIMARY KEY,
                id_servidor INTEGER,
                fazenda_id INTEGER NOT NULL,
                nome VARCHAR(200) NOT NULL,
                FOREIGN KEY(fazenda_id) REFERENCES fazenda(id)
            )    
        `);

        // incluir sanitário


        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS raca(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(200) NOT NULL
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS animal(
                id INTEGER PRIMARY KEY,
                ani_id INTEGER,
                ani_tag VARCHAR(20) NOT NULL,
                raca_id INTEGER NOT NULL,
                cod_sisbov VARCHAR,
                private data_nascimento DATE,
                fazenda_id INTEGER NOT NULL, 
                data_cadastro DATE NOT NULL,
                categoria_id INTEGER,
                status INTEGER(1),
                sanitario_id INTEGER,
                FOREIGN KEY(categoria_id) REFERENCES categoria(id),
                FOREIGN KEY(raca_id) REFERENCES raca(id)
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS morte(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                animal_id INTEGER NOT NULL,
                animal_tag VARCHAR(20) NOT NULL,
                data DATE NOT NULL,
                usuario_id INTEGER NOT NULL,
                FOREIGN KEY(animal_id) REFERENCES animal(id)
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS pesagem(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                ani_id INTEGER NOT NULL,
                peso REAL NOT NULL,
                data_pesagem DATE NOT NULL,
                usuario_id NOT NULL,
                FOREIGN KEY(ani_id) REFERENCES animal(id)
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS troca_tag(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                ani_id INTEGER NOT NULL,
                tag_antiga VARCHAR(20) NOT NULL,
                tag_nova VARCHAR(20) NOT NULL,
                data_troca DATE NOT NULL,
                FOREIGN KEY(ani_id) REFERENCES animal(id)
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS lote(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(200) NOT NULL,
                fazenda_id INTEGER NOT NULL,
                descricao VARCHAR(200),
                FOREIGN KEY(fazenda_id) REFERENCES fazenda(id)
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS gta(
                id INTEGER PRIMARY KEY,
                numero VARCHAR(200) NOT NULL,
                descricao VARCHAR(200),
                fazenda_origem_id INTEGER NOT NULL,
                fazenda_destino_id INTEGER NOT NULL,
                data DATE NOT NULL,
                tipo INTEGER(1) NOT NULL,
                quantidade_animais INTEGER,
                FOREIGN KEY(fazenda_origem_id) REFERENCES fazenda(id),
                FOREIGN KEY(fazenda_destino_id) REFERENCES fazenda_terceiro(id)
            )    
        `);

        // criar rotina cadastro 

        // criar rotina venda 

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS cadastro(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                ani_id INTEGER NOT NULL,
                ani_tag VARCHAR(20) NOT NULL,
                cod_sisbov VARCHAR(200),
                raca_id INTEGER NOT NULL,
                data_nascimento DATE,
                fazenda_id INTEGER NOT NULL,
                sexo INTEGER(1) NOT NULL,
                peso_inicial REAL,
                rotina_id INTEGER,
                lote_id INTEGER,
                categoria_id INTEGER,
                FOREIGN KEY(lote_id) REFERENCES lote(id),
                FOREIGN KEY(categoria_id) REFERENCES categoria(id),
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            )    
        `);
*/
    }



}