class ViewDetails{
    private logicielCourant : Logiciel;

    private buttonAnnuler : HTMLButtonElement;
    private buttonValider : HTMLButtonElement;
    private saisiNom : HTMLInputElement;
    private saisiType : HTMLInputElement;
    private saisiVersion : HTMLInputElement;
    private saisiObsolete : HTMLInputElement;
    private saisiFiliereDiv : HTMLDivElement;
    
    constructor(){
        this.buttonAnnuler = document.getElementById("cancel") as HTMLButtonElement;
        this.buttonValider = document.getElementById("ok") as HTMLButtonElement;
        
        this.buttonAnnuler.addEventListener('click', () => {
            window.history.back();
        });
        this.buttonValider.addEventListener('click',() =>{
            this.validate();
            //window.history.back();
        });

        this.saisiNom = document.getElementById("name") as HTMLInputElement;
        this.saisiType = document.getElementById("type") as HTMLInputElement;
        this.saisiVersion = document.getElementById("version") as HTMLInputElement;
        this.saisiObsolete = document.getElementById("obsolete") as HTMLInputElement;
        this.saisiFiliereDiv = document.getElementById("years") as HTMLDivElement;
    }

    public async InitialiseLogiciel(idLogiciel : number){
        let logicielDAO : LogicielDAO = new LogicielDAO();
        let filiereDAO : FiliereDAO = new FiliereDAO();
        this.logicielCourant = await logicielDAO.GetLogicielByID(idLogiciel);
        let filiereLogicielCourant = await filiereDAO.getFiliereByLogiciel(idLogiciel);

        this.saisiNom.value = this.logicielCourant.nom;
        this.saisiType.value = this.logicielCourant.type;
        this.saisiVersion.value = this.logicielCourant.version;
        this.saisiObsolete.checked = this.logicielCourant.obsolete;

        let listeFiliere = await filiereDAO.getAll();
        listeFiliere.forEach(element => {
            let div = document.createElement("div");
            div.className="year";
            let label = document.createElement("label");
            label.innerHTML = element.getName();
            let input = document.createElement("input");
            input.type = "checkbox";
            input.className = "checkBoxTKT";
            input.value = element.getID().toString();
            filiereLogicielCourant.forEach(elementFi => {
                if(elementFi.getID() == element.getID()){
                    input.checked = true;
                }
            });
            label.appendChild(input);
            div.appendChild(label);
            this.saisiFiliereDiv.appendChild(div);
        });


    }
    private validate(){
        let log : Logiciel = new Logiciel();
        log.ID = this.logicielCourant.ID;
        log.nom = this.saisiNom.value;
        log.version = this.saisiVersion.value;
        log.type = this.saisiType.value;
        log.obsolete = this.saisiObsolete.checked;
        
        let listeFiliereLog = [];
        let listeInputCheckBox = document.getElementsByClassName("checkBoxTKT");
        for(let item of listeInputCheckBox){
            if((item as HTMLInputElement).checked){
                listeFiliereLog.push((item as HTMLInputElement).value);
            }
        }
        console.log(listeFiliereLog);
        let logicielDAO : LogicielDAO = new LogicielDAO();
        let filiereDAO : FiliereDAO = new FiliereDAO();
        logicielDAO.Update(log);
        filiereDAO.UpdateFiliereByLogiciel(this.logicielCourant.ID,listeFiliereLog);
        
    }
}