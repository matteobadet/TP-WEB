class ViewDetails{
    private logicielCourant : Logiciel;

    private buttonAnnuler : HTMLButtonElement;
    private buttonValider : HTMLButtonElement;
    private saisiNom : HTMLInputElement;
    private saisiType : HTMLInputElement;
    private saisiVersion : HTMLInputElement;
    private saisiObsolete : HTMLInputElement;
    private saisiFiliereDiv : HTMLDivElement;

    private saisiFichierArchive : HTMLInputElement;
    private saisiFichierTuto : HTMLInputElement;
    private saisiFichierPortable : HTMLInputElement;
    private saisiFichierImgLogo : HTMLInputElement;

    private uploadFichierArchive : HTMLInputElement;
    private uploadFichierTuto : HTMLInputElement;
    private uploadFichierPortable : HTMLInputElement;
    private uploadFichierImgLogo : HTMLInputElement;
    
    constructor(){
        this.buttonAnnuler = document.getElementById("cancel") as HTMLButtonElement;
        this.buttonValider = document.getElementById("ok") as HTMLButtonElement;
        
        this.buttonAnnuler.addEventListener('click', () => {
            window.history.back();
        });
        this.buttonValider.addEventListener('click',() =>{
            this.validate();
            this.upload(this.saisiFichierArchive,this.uploadFichierArchive);
            this.upload(this.saisiFichierTuto,this.uploadFichierTuto);
            this.upload(this.saisiFichierPortable,this.uploadFichierPortable);
            this.upload(this.saisiFichierImgLogo,this.uploadFichierImgLogo);
            window.history.back();
        });

        this.saisiNom = document.getElementById("name") as HTMLInputElement;
        this.saisiType = document.getElementById("type") as HTMLInputElement;
        this.saisiVersion = document.getElementById("version") as HTMLInputElement;
        this.saisiObsolete = document.getElementById("obsolete") as HTMLInputElement;
        this.saisiFiliereDiv = document.getElementById("years") as HTMLDivElement;

        this.saisiFichierArchive = document.getElementById("urlSetup") as HTMLInputElement;
        this.saisiFichierTuto = document.getElementById("urlTuto") as HTMLInputElement;
        this.saisiFichierPortable = document.getElementById("urlPort") as HTMLInputElement;
        this.saisiFichierImgLogo = document.getElementById("urlImage") as HTMLInputElement;

        this.uploadFichierArchive = document.getElementById("rangeSetup") as HTMLInputElement;
        this.uploadFichierTuto = document.getElementById("rangeTuto") as HTMLInputElement;
        this.uploadFichierPortable = document.getElementById("rangePort") as HTMLInputElement;
        this.uploadFichierImgLogo = document.getElementById("rangeImage") as HTMLInputElement;
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

        log.urlSetup = this.getFileName(this.saisiFichierArchive);
        log.urlTuto = this.getFileName(this.saisiFichierTuto);
        log.urlImage = this.getFileName(this.saisiFichierImgLogo);
        log.urlPort = this.getFileName(this.saisiFichierPortable);

        let logicielDAO : LogicielDAO = new LogicielDAO();
        let filiereDAO : FiliereDAO = new FiliereDAO();
        logicielDAO.Update(log);
        filiereDAO.UpdateFiliereByLogiciel(this.logicielCourant.ID,listeFiliereLog);
        
    }

    private async upload(input: HTMLInputElement,progressBar: HTMLInputElement) {
        // envoie au serveur le fichier contenu dans la zone
        let files = input.files;
        if (files.length > 0) {
        let formData = new FormData();
        formData.append("file", files[0]);
        const xhr = new XMLHttpRequest();
        progressBar.classList.remove("hide");
        await new Promise((resolve) => {
        xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
        // todo show progression
            progressBar.value = String(((evt.loaded/evt.total)*100));
        }
        }, false);
        xhr.addEventListener("loadend", () => {
        resolve(xhr.readyState === 4 && xhr.status === 200);
        });
        xhr.open("POST", "php/upload.php", true);
        xhr.send(formData);
        });
        progressBar.classList.add("hide");
        }
    }
    private getFileName(input: HTMLInputElement): string {
        let files = input.files;
        let file = "";
        if (files.length > 0) {
        let url = files[0].name;
        file = "files/" + url;
        }
        return file;
    }
       
       
}