class Controler extends Observable{

    private daoLogiciel : LogicielDAO;

    public constructor() {
        super();
        this.daoLogiciel = new LogicielDAO();
    }
    /**
     * foonction qui détruit un logiciel
     * @param id id du logiciel à enlever
     */
    public deleteLogiciel(id : Int32Array){
        this.daoLogiciel.Delete(id);
    }

}