var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ViewIndex {
    constructor(cont) {
        this.controler = cont;
        cont.register(this);
        this.matieres = document.getElementById("courses");
        this.filieres = document.getElementById("years");
        this.logiciels = document.getElementById("listSofts");
        this.showLogiciel = document.getElementById("software");
        this.deleteLink = document.getElementById("delete");
        this.editLink = document.getElementById("modify");
        this.deleteLink.addEventListener("click", () => this.supprimer());
        this.editLink.addEventListener("click", () => this.editer());
        this.logicielCourant = null;
        this.tousLogiciels = document.getElementById("all");
        this.logicielsFiliere = document.getElementById("year");
        this.logicielsMatiere = document.getElementById("course");
        this.tousLogiciels.checked = true;
        document.getElementById("filterBtn").addEventListener("click", () => this.filtrer());
        this.fillMatieres();
        this.fillFiliere();
    }
    notifyDelete(log) {
        this.controler.deleteLogiciel(log.ID);
        alert("Le logiciel " + log.nom + " est supprimé");
        this.showLogiciel.replaceChildren();
        this.filtrer();
    }
    filtrer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.tousLogiciels.checked) {
                yield this.fillLogiciel();
            }
            else if (this.logicielsFiliere.checked) {
                if (this.filieres.selectedIndex > -1) {
                    let filiere = this.filieres.options[this.filieres.selectedIndex];
                    if (filiere) {
                        let id = this.filieres.selectedIndex;
                        yield this.fillLogicielByFiliere(id + 1);
                    }
                }
            }
        });
    }
    fillMatieres() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dao = new MatiereDAO();
                let matieres = yield dao.getAll();
                matieres.forEach((matiere) => {
                    let item = document.createElement("option");
                    item.value = matiere.getID.toString();
                    item.innerHTML = matiere.getLibelle();
                    this.matieres.appendChild(item);
                });
            }
            catch (e) {
                alert(e.message);
            }
        });
    }
    fillFiliere() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dao = new FiliereDAO();
                let filieres = yield dao.getAll();
                filieres.forEach((filiere) => {
                    let item = document.createElement("option");
                    item.value = filiere.getID.toString();
                    item.innerHTML = filiere.getName();
                    this.filieres.appendChild(item);
                });
            }
            catch (e) {
                alert(e.message);
            }
        });
    }
    fillLogiciel() {
        return __awaiter(this, void 0, void 0, function* () {
            let dao = new LogicielDAO();
            let logiciels = yield dao.getAll();
            this.drawLogiciels(logiciels);
        });
    }
    fillLogicielByFiliere(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dao = new LogicielDAO();
            let logiciels = yield dao.getByFilliere(id);
            this.drawLogiciels(logiciels);
        });
    }
    drawLogiciels(logiciels) {
        try {
            this.logiciels.replaceChildren();
            logiciels.forEach((logiciel) => {
                let item = document.createElement("div");
                item.className = "listitem";
                let itemName = document.createElement("p");
                itemName.innerHTML = logiciel.nomversion;
                item.appendChild(itemName);
                item.addEventListener("click", (event) => {
                    document.querySelectorAll(".selected").forEach((elt) => {
                        elt.classList.remove("selected");
                    });
                    item.classList.add("selected");
                    this.displayLogiciel(logiciel);
                    this.logicielCourant = logiciel;
                });
                this.logiciels.appendChild(item);
            });
        }
        catch (e) {
            alert(e.message);
        }
    }
    displayLogiciel(logiciel) {
        this.showLogiciel.replaceChildren();
        let name = document.createElement("p");
        name.id = "softName";
        name.innerHTML = logiciel.nomversion;
        let type = document.createElement("p");
        type.innerHTML = logiciel.type;
        type.id = "softType";
        let image = document.createElement("img");
        image.src = logiciel.urlImage;
        image.id = "ImgSoft";
        image.alt = "Image de " + logiciel.nom;
        let description = document.createElement("p");
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
    supprimer() {
        this.controler.notifyDelete(this.logicielCourant);
    }
    editer() {
        window.location.href = "editor.html?idLogiciel=" + this.logicielCourant.ID;
    }
}
//# sourceMappingURL=viewindex.js.map