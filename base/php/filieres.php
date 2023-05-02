<?php
require_once("database.php");

class FiliereDAO{
    private Database $bdd; 

    function __construct(Database $bdd){
        $this->bdd = $bdd;
    }
    public function GetFilieres() : array{
        return $this->bdd->queryAll("SELECT ID,nom FROM Filiere",array());
    }
    public function GetFiliereByLogiciel(int $id){
        return $this->bdd->queryAll("SELECT ID,nom FROM filiere JOIN logiciel_filiere on logiciel_filiere.FiliereID=ID WHERE logiciel_filiere.LogicielID=?",array($id));
    }
}
$bdd = new Database();
$dao = new FiliereDAO($bdd);
if(isset($_GET['idLogiciel'])){
    echo json_encode($dao->GetFiliereByLogiciel($_GET['idLogiciel']));
} else {
    echo json_encode($dao->GetFilieres());
}