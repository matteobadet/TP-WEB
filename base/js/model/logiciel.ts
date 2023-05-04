class Logiciel{
    private _ID: Int32Array;
    public get ID(): Int32Array {
        return this._ID;
    }
    public set ID(value: Int32Array) {
        this._ID = value;
    }
    private _nom: string;
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    private _version: string;
    public get version(): string {
        return this._version;
    }
    public set version(value: string) {
        this._version = value;
    }
    private _urlSetup: string;
    public get urlSetup(): string {
        return this._urlSetup;
    }
    public set urlSetup(value: string) {
        this._urlSetup = value;
    }
    private _urlImage: string;
    public get urlImage(): string {
        return this._urlImage;
    }
    public set urlImage(value: string) {
        this._urlImage = value;
    }
    private _urlTuto: string;
    public get urlTuto(): string {
        return this._urlTuto;
    }
    public set urlTuto(value: string) {
        this._urlTuto = value;
    }
    private _urlPort:string;
    public get urlPort():string{
        return this._urlPort;
    }
    public set urlPort(value: string){
        this._urlPort = value;
    }
    private _comment: string;
    public get comment(): string {
        return this._comment;
    }
    public set comment(value: string) {
        this._comment = value;
    }
    private _type: string;
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    private _obsolete: boolean;
    public get obsolete(): boolean {
        return this._obsolete;
    }
    public set obsolete(value: boolean) {
        this._obsolete = value;
    }
    public get nomversion(): string {
        let res =this._nom + " " + this._version + " (obsolète)";
        if(!this._obsolete){
            res = this._nom + " " + this._version;
        }
        return res;
    }
}