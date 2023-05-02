class FiliereDAO{
    public async getAll(): Promise<Array<Filiere>> {
        let filieres = new Array<Filiere>();
        let response = await fetch("php/filieres.php");
        if (response.ok) {
            let array = await response.json();
            array.forEach((obj) => {
                let filiere = new Filiere();
                filiere.setID(obj.ID);
                filiere.setName(obj.nom);
                filieres.push(filiere);
            });
        }
        else
            throw new Error("Unable to get from server");
        return filieres;
    }
    public async getFiliereByLogiciel(id : number):Promise<Filiere[]>{
        let filieres = new Array<Filiere>();
        let response = await fetch("php/filieres.php?idLogiciel="+id);
        if (response.ok) {
            let array = await response.json();
            array.forEach((obj) => {
                let filiere = new Filiere();
                filiere.setID(obj.ID);
                filiere.setName(obj.nom);
                filieres.push(filiere);
            });
        }
        else
            throw new Error("Unable to get from server");
        console.log(filieres);
        return filieres;
    }

}