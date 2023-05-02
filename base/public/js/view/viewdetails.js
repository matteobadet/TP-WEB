var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ViewDetails {
    constructor() {
        this.buttonAnnuler = document.getElementById("cancel");
        this.buttonAnnuler.click = () => window.history.back();
        this.saisiNom = document.getElementById("name");
        this.saisiType = document.getElementById("type");
        this.saisiVersion = document.getElementById("version");
        this.saisiObsolete = document.getElementById("obsolete");
        this.saisiFiliereDiv = document.getElementById("years");
    }
    InitialiseLogiciel(idLogiciel) {
        return __awaiter(this, void 0, void 0, function* () {
            let logicielDAO = new LogicielDAO();
            let filiereDAO = new FiliereDAO();
            this.logicielCourant = yield logicielDAO.GetLogicielByID(idLogiciel);
            let filiereLogicielCourant = yield filiereDAO.getFiliereByLogiciel(idLogiciel);
            this.saisiNom.value = this.logicielCourant.nom;
            this.saisiType.value = this.logicielCourant.type;
            this.saisiVersion.value = this.logicielCourant.version;
            this.saisiObsolete.checked = this.logicielCourant.obsolete;
            let listeFiliere = yield filiereDAO.getAll();
            listeFiliere.forEach(element => {
                let div = document.createElement("div");
                div.className = "year";
                let label = document.createElement("label");
                label.innerHTML = element.getName();
                let input = document.createElement("input");
                input.type = "checkbox";
                input.value = element.getID().toString();
                filiereLogicielCourant.forEach(elementFi => {
                    if (elementFi.getID() == element.getID()) {
                        input.checked = true;
                    }
                });
                label.appendChild(input);
                div.appendChild(label);
                this.saisiFiliereDiv.appendChild(div);
            });
        });
    }
}
//# sourceMappingURL=viewdetails.js.map