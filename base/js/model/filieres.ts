class Filiere{
    private ID: number;
    private nom: string;

    public getID() : number{
        return this.ID;
    }
    public setID(id: number){
        this.ID = id;
    }

    public getName(): string {
        return this.nom;
    }
    public setName(nom: string) {
        this.nom = nom;
    }
}