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

    notifyDelete(log: Logiciel) {
        this.controler.deleteLogiciel(log.ID);
        alert("Le logiciel "+log.nom+" est supprimé");
        this.showLogiciel.replaceChildren();
        this.filtrer();
    }

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
    private async fillLogiciel(){
        let dao = new LogicielDAO();
        let logiciels = await dao.getAll();
        this.drawLogiciels(logiciels);
    }
    private async fillLogicielByFiliere(id : number){
        let dao = new LogicielDAO();
        let logiciels = await dao.getByFilliere(id);
        this.drawLogiciels(logiciels);
    }

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

    private displayLogiciel(logiciel : Logiciel){
        this.showLogiciel.replaceChildren();
        let name : HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        name.id = "softName";
        name.innerHTML = logiciel.nomversion;
        let type : HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        type.innerHTML = logiciel.type;
        type.id = "softType";
        let image : HTMLImageElement = document.createElement("img") as HTMLImageElement;
        image.src = logiciel.urlImage;
        image.id = "ImgSoft";
        image.alt = "Image de "+logiciel.nom;
        let description: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        description.innerHTML = logiciel.comment;
        description.id = "comment";
        let lienTuto = document.createElement("a");
        lienTuto.title = "Lien vers le tutoriel d'installation";
        lienTuto.href = logiciel.urlTuto;
        let lienSetup = document.createElement("a");
        lienSetup.title = "Lien vers l'archive d'installation";
        lienSetup.href = logiciel.urlSetup;

        this.showLogiciel.append(name);
        this.showLogiciel.append(type);
        this.showLogiciel.append(image);
        this.showLogiciel.append(description);
        this.showLogiciel.append(lienTuto);
        this.showLogiciel.append(lienSetup);
        
    }

    private supprimer(){
        this.controler.notifyDelete(this.logicielCourant);
    }
    private editer(){
        window.location.href = "editor.html?idLogiciel="+this.logicielCourant.ID;
    }
}