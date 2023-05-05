class LogicielDAO{
    /**
     * methode qui donne tous les logiciels
     * @returns la liste des logiciels
     */
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
                logiciel.urlSetup = obj.urlsetup;
                logiciel.urlPort = obj.urlPort;
                logiciel.urlImage = obj.urlImage;
                logiciel.urlTuto = obj.urltuto;
                logiciel.comment = obj.comment;
                logiciel.type = obj.type;
                logiciel.obsolete = obj.obsolete;
                logiciels.push(logiciel);
                console.log(logiciel);
            });
        }
        else
            throw new Error("Unable to get from server");
        return logiciels;
    }
    /**
     * methode qui donne la liste de logiciel en foncction d'une filière
     * @param id_filiere id de la filière
     * @returns la liste de logiciel
     */
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
                logiciel.urlSetup = obj.urlsetup;
                logiciel.urlPort = obj.urlPort;
                logiciel.urlImage = obj.urlImage;
                logiciel.urlTuto = obj.urltuto;
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
    /**
     * methode qui enlève un logiciel dee la bdd
     * @param id_to_remove id du logiciel
     */
    public async Delete(id_to_remove : Int32Array){
        let response = await fetch("php/logicielDAO.php?id_to_remove="+id_to_remove);
    }
    /**
     * methode qui renvoie un logiciel en fonction de son id
     * @param id_to_edit id du logiciel
     * @returns le logiciel
     */
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
                logiciel.urlSetup = obj.urlsetup;
                logiciel.urlPort = obj.urlPort;
                logiciel.urlImage = obj.urlImage;
                logiciel.urlTuto = obj.urltuto;
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
    /**
     * methode qui met a jour un logiciel dans la bdd
     * @param log logiciel a mettre a jour
     */
    public async Update(log : Logiciel){
        let datas = new FormData();
        datas.append("id",log.ID.toString());
        datas.append("nom",log.nom);
        datas.append("version",log.version);
        datas.append("type",log.type);
        datas.append("obsolete",String(log.obsolete));
        datas.append("urlSetup",log.urlSetup);
        datas.append("urlTuto",log.urlTuto);
        datas.append("urlPort",log.urlPort);
        datas.append("urlImage",log.urlImage);
        let response = fetch("php/logicielDAO.php",{
            method: 'POST',
            body: datas
        });
    }

}