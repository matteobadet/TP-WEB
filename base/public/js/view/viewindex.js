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
        this.matieres = document.getElementById("courses");
        this.filieres = document.getElementById("years");
        this.logiciels = document.getElementById("listSofts");
        this.tousLogiciels = document.getElementById("all");
        this.logicielsFiliere = document.getElementById("year");
        this.logicielsMatiere = document.getElementById("course");
        this.tousLogiciels.checked = true;
        document.getElementById("filterBtn").addEventListener("click", () => this.filtrer());
        this.fillMatieres();
        this.fillFiliere();
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
                });
                this.logiciels.appendChild(item);
            });
        }
        catch (e) {
            alert(e.message);
        }
    }
}
//# sourceMappingURL=viewindex.js.map