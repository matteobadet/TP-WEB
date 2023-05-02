var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class LogicielDAO {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let logiciels = new Array();
            let response = yield fetch("php/logicielDAO.php");
            if (response.ok) {
                let array = yield response.json();
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
        });
    }
    getByFilliere(id_filiere) {
        return __awaiter(this, void 0, void 0, function* () {
            let logiciels = new Array();
            let response = yield fetch("php/logicielDAO.php?id_filiere=" + id_filiere);
            if (response.ok) {
                let array = yield response.json();
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
        });
    }
    Delete(id_to_remove) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch("php/logicielDAO.php?id_to_remove=" + id_to_remove);
        });
    }
    GetLogicielByID(id_to_edit) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch("php/logicielDAO.php?id_to_edit=" + id_to_edit);
            let logiciels = new Array();
            if (response.ok) {
                let array = yield response.json();
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
        });
    }
}
//# sourceMappingURL=logicielDAO.js.map