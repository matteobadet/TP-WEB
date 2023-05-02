var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.onload = () => __awaiter(this, void 0, void 0, function* () {
    let controler = new Controler();
    let index = new ViewIndex(controler);
    console.log("Application init done.");
    let daoFiliere = new FiliereDAO();
    let testFiliere = yield daoFiliere.getAll();
    console.log("Filieres get from server :");
    console.log(testFiliere);
    let daoMatiere = new MatiereDAO();
    let testMatiere = yield daoMatiere.getAll();
    console.log("Matieres get from server :");
    console.log(testMatiere);
    let daoLogiciel = new LogicielDAO();
    let testLogiciel = yield daoLogiciel.getAll();
    console.log("Logiciel get from server :");
    console.log(testLogiciel);
    let testLogiciel2 = yield daoLogiciel.getByFilliere(3);
    console.log("Logiciel get from server by filiere :");
    console.log(testLogiciel2);
});
//# sourceMappingURL=main.js.map