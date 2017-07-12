export class Fazenda {
    private nome: string;
    private cnpj: string;
    private email: string;
    private proprietario: string;
    private estadoId: number;
    private cidade: string;

    public toJSONObject() {
        let obj: any = {};
        obj.nome = this.nome;
        obj.cnpj = this.cnpj;
        obj.email = this.email;
        obj.proprietario = this.proprietario;
        obj.estadoId = this.estadoId;
        obj.cidade = this.cidade;

        return obj;
    }

    public jsonToObject(json: any): Fazenda {
        let fazenda = new Fazenda();
        fazenda.$cidade = json.cidade;
        fazenda.$cnpj = json.cnpj;
        fazenda.$email = json.email;
        fazenda.$estadoId = json.estadoId;
        fazenda.$nome = json.nome;
        fazenda.$proprietario = json.proprietario;

        return fazenda;
    }


    public get $nome(): string {
        return this.nome;
    }

    public set $nome(value: string) {
        this.nome = value;
    }


    public get $cnpj(): string {
        return this.cnpj;
    }

    public set $cnpj(value: string) {
        this.cnpj = value;
    }

    public get $email(): string {
        return this.email;
    }

    public set $email(value: string) {
        this.email = value;
    }

    public get $proprietario(): string {
        return this.proprietario;
    }

    public set $proprietario(value: string) {
        this.proprietario = value;
    }

    public get $estadoId(): number {
        return this.estadoId;
    }

    public set $estadoId(value: number) {
        this.estadoId = value;
    }


    public get $cidade(): string {
        return this.cidade;
    }

    public set $cidade(value: string) {
        this.cidade = value;
    }


}