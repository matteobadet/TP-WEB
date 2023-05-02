class MatiereDAO {
    public async getAll(): Promise<Array<Matiere>> {
        let matieres = new Array<Matiere>();
        let response = await fetch("php/matiere.php");
        if (response.ok) {
            let array = await response.json();
            array.forEach((obj) => {
                let matiere = new Matiere();
                matiere.setID(obj.ID);
                matiere.setNom(obj.nom);
                matiere.setCode(obj.code);
                matieres.push(matiere);
            });
        }
        else
            throw new Error("Unable to get from server");
        return matieres;
    }

}