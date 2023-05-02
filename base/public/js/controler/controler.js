class Controler extends Observable {
    constructor() {
        super();
        this.daoLogiciel = new LogicielDAO();
    }
    deleteLogiciel(id) {
        this.daoLogiciel.Delete(id);
    }
}
//# sourceMappingURL=controler.js.map