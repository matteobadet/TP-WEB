class Matiere{
    private ID : number;
    private code : string;
    private nom : string;

    public getID() : number{
        return this.ID;
    }
    public setID(id : number){
        this.ID = id;
    }

    public getCode():string{
        return this.code;
    }
    public setCode(code : string){
        this.code = code;
    }

    public getNom(): string {
        return this.nom;
    }
    public setNom(nom: string) {
        this.nom = nom;
    }

    public getLibelle() : string{
        return this.getCode() + " - " + this.getNom();
    }
}