class FiliereDAO{
    /**
     * methode qui donne toutes les filières
     * @returns la liste de toutes les filières
     */
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
    /**
     * methode qui donne toute les filières en fonction d'un logiciel
     * @param id id du logiciel
     * @returns la liste de filière
     */
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
        return filieres;
    }
    /**
     * methode qui met a jour
     * @param id id d'un logiciel
     * @param array la liste de filière dans lequel est present le logiciel
     */
    public async UpdateFiliereByLogiciel(id : Int32Array,array){
        let datas = new FormData();
        datas.append("array",array);
        let response = await fetch("php/filieres.php?id_update_filiere="+id,{
            method: 'POST',
            body: datas
        });
    } 

}