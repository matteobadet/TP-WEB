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
        this.buttonValider = document.getElementById("ok");
        this.buttonAnnuler.addEventListener('click', () => {
            window.history.back();
        });
        this.buttonValider.addEventListener('click', () => {
            this.upload(this.saisiFichierArchive, this.uploadFichierArchive);
            this.upload(this.saisiFichierTuto, this.uploadFichierTuto);
            this.upload(this.saisiFichierPortable, this.uploadFichierPortable);
            this.upload(this.saisiFichierImgLogo, this.uploadFichierImgLogo);
            this.validate();
            window.history.back();
        });
        this.saisiNom = document.getElementById("name");
        this.saisiType = document.getElementById("type");
        this.saisiVersion = document.getElementById("version");
        this.saisiObsolete = document.getElementById("obsolete");
        this.saisiFiliereDiv = document.getElementById("years");
        this.saisiFichierArchive = document.getElementById("urlSetup");
        this.saisiFichierTuto = document.getElementById("urlTuto");
        this.saisiFichierPortable = document.getElementById("urlPort");
        this.saisiFichierImgLogo = document.getElementById("urlImage");
        this.uploadFichierArchive = document.getElementById("rangeSetup");
        this.uploadFichierTuto = document.getElementById("rangeTuto");
        this.uploadFichierPortable = document.getElementById("rangePort");
        this.uploadFichierImgLogo = document.getElementById("rangeImage");
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
                input.className = "checkBoxTKT";
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
    validate() {
        let log = new Logiciel();
        log.ID = this.logicielCourant.ID;
        log.nom = this.saisiNom.value;
        log.version = this.saisiVersion.value;
        log.type = this.saisiType.value;
        log.obsolete = this.saisiObsolete.checked;
        let listeFiliereLog = [];
        let listeInputCheckBox = document.getElementsByClassName("checkBoxTKT");
        for (let item of listeInputCheckBox) {
            if (item.checked) {
                listeFiliereLog.push(item.value);
            }
        }
        log.urlSetup = this.getFileName(this.saisiFichierArchive);
        log.urlTuto = this.getFileName(this.saisiFichierTuto);
        log.urlImage = this.getFileName(this.saisiFichierImgLogo);
        log.urlPort = this.getFileName(this.saisiFichierPortable);
        let logicielDAO = new LogicielDAO();
        let filiereDAO = new FiliereDAO();
        logicielDAO.Update(log);
        filiereDAO.UpdateFiliereByLogiciel(this.logicielCourant.ID, listeFiliereLog);
    }
    upload(input, progressBar) {
        return __awaiter(this, void 0, void 0, function* () {
            let files = input.files;
            if (files.length > 0) {
                let formData = new FormData();
                formData.append("file", files[0]);
                const xhr = new XMLHttpRequest();
                progressBar.classList.remove("hide");
                yield new Promise((resolve) => {
                    xhr.upload.addEventListener("progress", (evt) => {
                        if (evt.lengthComputable) {
                            progressBar.value = String(((evt.loaded / evt.total) * 100));
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
        });
    }
    getFileName(input) {
        let files = input.files;
        let file = "";
        if (files.length > 0) {
            let url = files[0].name;
            file = "files/" + url;
        }
        return file;
    }
}
//# sourceMappingURL=viewdetails.js.map