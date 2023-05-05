class ViewIndex implements IObserver{
    private controler : Controler;
    private matieres : HTMLSelectElement;
    private filieres : HTMLSelectElement;
    private logiciels : HTMLDivElement;
    private showLogiciel : HTMLDivElement;
    private deleteLink : HTMLLabelElement;
    private editLink : HTMLLabelElement;

    private logicielCourant : Logiciel;

    private tousLogiciels: HTMLInputElement;
    private logicielsFiliere: HTMLInputElement;
    private logicielsMatiere: HTMLInputElement;

    constructor(cont : Controler){
        this.controler = cont;
        cont.register(this);

        this.matieres = document.getElementById("courses") as HTMLSelectElement;
        this.filieres = document.getElementById("years") as HTMLSelectElement;
        this.logiciels = document.getElementById("listSofts") as HTMLDivElement;
        this.showLogiciel = document.getElementById("software") as HTMLDivElement;
        this.deleteLink = document.getElementById("delete") as HTMLLabelElement;
        this.editLink = document.getElementById("modify") as HTMLLabelElement;

        this.deleteLink.addEventListener("click",() => this.supprimer());
        this.editLink.addEventListener("click", () => this.editer());

        this.logicielCourant = null;

        this.tousLogiciels = document.getElementById("all") as HTMLInputElement;
        this.logicielsFiliere = document.getElementById("year") as HTMLInputElement;
        this.logicielsMatiere = document.getElementById("course") as HTMLInputElement;

        this.tousLogiciels.checked = true;

        (document.getElementById("filterBtn") as HTMLButtonElement).addEventListener("click",() => this.filtrer());

        this.fillMatieres();
        this.fillFiliere();
        
    }
    /**
     * methode qui notify qu'un logiciel a été supprimer
     * @param log logiciel
     */
    notifyDelete(log: Logiciel) {
        this.controler.deleteLogiciel(log.ID);
        alert("Le logiciel "+log.nom+" est supprimé");
        this.showLogiciel.replaceChildren();
        this.filtrer();
    }
    /**
     * methode qui filtre l'affichage des logiciels
     */
    private async filtrer() {
        if (this.tousLogiciels.checked) {
            await this.fillLogiciel();
        }
        else if (this.logicielsFiliere.checked) {
            if (this.filieres.selectedIndex > -1) {
                let filiere = this.filieres.options[this.filieres.selectedIndex];
                if (filiere) {
                    let id: number = this.filieres.selectedIndex;
                    await this.fillLogicielByFiliere(id+1);
                }
            }   
        }
    }
       
    /**
     * methode qui remplie les matières
     */
    private async fillMatieres(){
        try {
            let dao = new MatiereDAO();
            let matieres = await dao.getAll();
            matieres.forEach((matiere: Matiere) => {
                let item: HTMLOptionElement = document.createElement("option") as
                    HTMLOptionElement;
                item.value = matiere.getID.toString();
                item.innerHTML = matiere.getLibelle();
                this.matieres.appendChild(item);
            });
        }
        catch (e) {
            alert(e.message);
        }
    }
    /**
     * methode qui remplie les filières
     */
    private async fillFiliere(){
        try {
            let dao = new FiliereDAO();
            let filieres = await dao.getAll();
            filieres.forEach((filiere: Filiere) => {
                let item: HTMLOptionElement = document.createElement("option") as
                    HTMLOptionElement;
                item.value = filiere.getID.toString();
                item.innerHTML = filiere.getName();
                this.filieres.appendChild(item);
            });
        }
        catch (e) {
            alert(e.message);
        }

    }
    /**
     * methode qui remplie les logiciels
     */
    private async fillLogiciel(){
        let dao = new LogicielDAO();
        let logiciels = await dao.getAll();
        this.drawLogiciels(logiciels);
    }
    /**
     * methode qui remplie les logiciels en fonction d'une filière
     * @param id iid de la fiilière
     */
    private async fillLogicielByFiliere(id : number){
        let dao = new LogicielDAO();
        let logiciels = await dao.getByFilliere(id);
        this.drawLogiciels(logiciels);
    }
    /**
     * methode qui remplie dans la page html
     * @param logiciels liste de logiciel
     */
    private drawLogiciels(logiciels : Array<Logiciel>){
        try {
            this.logiciels.replaceChildren();
            logiciels.forEach((logiciel: Logiciel) => {
                let item : HTMLDivElement = document.createElement("div") as HTMLDivElement;
                item.className = "listitem";
                let itemName : HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
                itemName.innerHTML = logiciel.nomversion;
                item.appendChild(itemName);

                item.addEventListener("click",(event) => {
                    document.querySelectorAll(".selected").forEach((elt) => {
                        elt.classList.remove("selected");
                    })
                    item.classList.add("selected");
                    this.displayLogiciel(logiciel);
                    this.logicielCourant = logiciel;
                })

                this.logiciels.appendChild(item);
            });
        }
        catch (e) {
            alert(e.message);
        }
    }
    /**
     * methode qui affiche les spécificités d'un logiciel
     * @param logiciel logiciel
     */
    private displayLogiciel(logiciel : Logiciel){

        this.showLogiciel.replaceChildren();
        let name : HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        name.id = "softName";
        name.innerHTML = logiciel.nomversion;
        this.showLogiciel.append(name);
        let type : HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        type.innerHTML = logiciel.type;
        type.id = "softType";
        this.showLogiciel.append(type);
        let image : HTMLImageElement = document.createElement("img") as HTMLImageElement;
        image.src = logiciel.urlImage;
        image.id = "ImgSoft";
        image.alt = "Image de "+logiciel.nom;
        this.showLogiciel.append(image);
        let description: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        description.innerHTML = logiciel.comment;
        description.id = "comment";
        this.showLogiciel.append(description);
        if(logiciel.urlTuto != undefined){
            let lienTuto = document.createElement("a");
            lienTuto.innerHTML = "Lien vers le tutoriel d'installation";
            lienTuto.href = logiciel.urlTuto;
            this.showLogiciel.append(lienTuto);
        }
        if(logiciel.urlSetup != undefined){
            let lienSetup = document.createElement("a");
            lienSetup.innerHTML = "Lien vers l'archive d'installation";
            lienSetup.href = logiciel.urlSetup;
            this.showLogiciel.append(lienSetup);
        }
        if(logiciel.urlPort != undefined){
            let lienPort = document.createElement("a");
            lienPort.innerHTML = "Lien vers la version portable";
            lienPort.href = logiciel.urlPort;
            this.showLogiciel.append(lienPort);
        }
    }
    /**
     * methode qui supprimer le logiciel courant
     */
    private supprimer(){
        this.controler.notifyDelete(this.logicielCourant);
    }
    /**
     * methode qui edit le logiciel courant
     */
    private editer(){
        window.location.href = "editor.html?idLogiciel="+this.logicielCourant.ID;
    }
}