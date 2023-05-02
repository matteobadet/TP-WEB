class LogicielDAO{
    public async getAll(): Promise<Array<Logiciel>> {
        let logiciels = new Array<Logiciel>();
        let response = await fetch("php/logicielDAO.php");
        if (response.ok) {
            let array = await response.json();
            array.forEach((obj) => {
                let logiciel = new Logiciel();
                logiciel.ID = obj.ID;
                logiciel.nom = obj.nom;
                logiciel.version = obj.version;
                logiciel.urlSetup = obj.urlSetup;
                logiciel.urlImage = obj.urlImage;
                logiciel.urlTuto = obj.urlTuto;
                logiciel.comment = obj.comment;
                logiciel.type = obj.type;
                logiciel.obsolete = obj.obsolete;
                logiciels.push(logiciel);
            });
        }
        else
            throw new Error("Unable to get from server");
        return logiciels;
    }
    public async getByFilliere(id_filiere : number) : Promise<Array<Logiciel>>{
        let logiciels = new Array<Logiciel>();
        let response = await fetch("php/logicielDAO.php?id_filiere="+id_filiere);
        if (response.ok) {
            let array = await response.json();
            array.forEach((obj) => {
                let logiciel = new Logiciel();
                logiciel.ID = obj.ID;
                logiciel.nom = obj.nom;
                logiciel.version = obj.version;
                logiciel.urlSetup = obj.urlSetup;
                logiciel.urlImage = obj.urlImage;
                logiciel.urlTuto = obj.urlTuto;
                logiciel.comment = obj.comment;
                logiciel.type = obj.type;
                logiciel.obsolete = obj.obsolete;
                logiciels.push(logiciel);
            });
        }
        else
            throw new Error("Unable to get from server");
        return logiciels;
    }
    public async Delete(id_to_remove : Int32Array){
        let response = await fetch("php/logicielDAO.php?id_to_remove="+id_to_remove);
    }
    public async GetLogicielByID(id_to_edit : number) : Promise<Logiciel>{
        let response = await fetch("php/logicielDAO.php?id_to_edit="+id_to_edit);
        let logiciels = new Array<Logiciel>();
        if (response.ok) {
            let array = await response.json();
            array.forEach((obj) => {
                let logiciel = new Logiciel();
                logiciel.ID = obj.ID;
                logiciel.nom = obj.nom;
                logiciel.version = obj.version;
                logiciel.urlSetup = obj.urlSetup;
                logiciel.urlImage = obj.urlImage;
                logiciel.urlTuto = obj.urlTuto;
                logiciel.comment = obj.comment;
                logiciel.type = obj.type;
                logiciel.obsolete = obj.obsolete;
                logiciels.push(logiciel);
            });
        }
        else
            throw new Error("Unable to get from server");
        return logiciels[0];
    }

}