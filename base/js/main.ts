// window.onload = () => {
//     let controler = new Controler();
//     let index = new ViewIndex(controler);
//     console.log("Application init done.");
// };

window.onload = async () => {
    let controler = new Controler();
    let index = new ViewIndex(controler);
    console.log("Application init done.");

    let daoFiliere = new FiliereDAO();
    let testFiliere = await daoFiliere.getAll();
    console.log("Filieres get from server :");
    console.log(testFiliere);

    let daoMatiere = new MatiereDAO();
    let testMatiere = await daoMatiere.getAll();
    console.log("Matieres get from server :");
    console.log(testMatiere);

    let daoLogiciel = new LogicielDAO();
    let testLogiciel = await daoLogiciel.getAll();
    console.log("Logiciel get from server :");
    console.log(testLogiciel);

    let testLogiciel2 = await daoLogiciel.getByFilliere(3);
    console.log("Logiciel get from server by filiere :");
    console.log(testLogiciel2);
};