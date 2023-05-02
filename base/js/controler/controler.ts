class Controler extends Observable{

    private daoLogiciel : LogicielDAO;

    public constructor() {
        super();
        this.daoLogiciel = new LogicielDAO();
    }
    public deleteLogiciel(id : Int32Array){
        this.daoLogiciel.Delete(id);
    }

}