export class HttpConfig {
    private url: string;
    private port: number;

    constructor() {
        this.url = "http://68.168.99.203";
        this.port = 5151;
    }

    public getUrlRequest(): string {
        return this.url + ":" + this.port;
    }

}