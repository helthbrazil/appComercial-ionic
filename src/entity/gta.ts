export class Gta {
    public static readonly ENTRADA: number = 1;
    public static readonly SAIDA: number = 2;

    private id: number;
    private idServidor: number;
    private numero: string;
    private descricao: string;
    private fazendaOrigemId: number;
    private fazendaDestinoId: number;
    private data: Date;
    private tipo: number;
    private quantidadeDeAnimais: number;


    public get $id(): number {
        return this.id;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public get $idServidor(): number {
        return this.idServidor;
    }

    public set $idServidor(value: number) {
        this.idServidor = value;
    }

    public get $numero(): string {
        return this.numero;
    }

    public set $numero(value: string) {
        this.numero = value;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public get $fazendaOrigemId(): number {
        return this.fazendaOrigemId;
    }

    public set $fazendaOrigemId(value: number) {
        this.fazendaOrigemId = value;
    }

    public get $fazendaDestinoId(): number {
        return this.fazendaDestinoId;
    }

    public set $fazendaDestinoId(value: number) {
        this.fazendaDestinoId = value;
    }

    public get $data(): Date {
        return this.data;
    }

    public set $data(value: Date) {
        this.data = value;
    }

    public get $tipo(): number {
        return this.tipo;
    }

    public set $tipo(value: number) {
        this.tipo = value;
    }

    public get $quantidadeDeAnimais(): number {
        return this.quantidadeDeAnimais;
    }

    public set $quantidadeDeAnimais(value: number) {
        this.quantidadeDeAnimais = value;
    }


}