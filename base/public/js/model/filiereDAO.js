var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FiliereDAO {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let filieres = new Array();
            let response = yield fetch("php/filieres.php");
            if (response.ok) {
                let array = yield response.json();
                array.forEach((obj) => {
                    let filiere = new Filiere();
                    filiere.setID(obj.ID);
                    filiere.setName(obj.nom);
                    filieres.push(filiere);
                });
            }
            else
                throw new Error("Unable to get from server");
            return filieres;
        });
    }
    getFiliereByLogiciel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let filieres = new Array();
            let response = yield fetch("php/filieres.php?idLogiciel=" + id);
            if (response.ok) {
                let array = yield response.json();
                array.forEach((obj) => {
                    let filiere = new Filiere();
                    filiere.setID(obj.ID);
                    filiere.setName(obj.nom);
                    filieres.push(filiere);
                });
            }
            else
                throw new Error("Unable to get from server");
            console.log(filieres);
            return filieres;
        });
    }
}
//# sourceMappingURL=filiereDAO.js.map