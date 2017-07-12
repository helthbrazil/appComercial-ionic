export class Usuario {
	private nome: string;
	private token: string;
	private email: string;
	private telefone: string;

	constructor() {

	}

	public toJSONObject() {
		let obj: any = {};
		obj.nome = this.nome;
		obj.token = this.token;
		obj.email = this.email;
		obj.telefone = this.telefone;

		return obj;
	}

	public jsonToObject(json: any): Usuario {
		let usuario = new Usuario();
        usuario.$nome = json.nome;
		usuario.$email = json.email;
		usuario.$telefone = json.telefone;
		usuario.$token = json.token;
		
		return usuario;
	}

	public get $nome(): string {
		return this.nome;
	}

	public set $nome(value: string) {
		this.nome = value;
	}

	public get $token(): string {
		return this.token;
	}

	public set $token(value: string) {
		this.token = value;
	}

	public get $email(): string {
		return this.email;
	}

	public set $email(value: string) {
		this.email = value;
	}

	public get $telefone(): string {
		return this.telefone;
	}

	public set $telefone(value: string) {
		this.telefone = value;
	}

}