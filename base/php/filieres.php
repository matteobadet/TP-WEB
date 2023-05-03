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
    public function UpdateFiliereByLogiciel(int $id,array $arrayFiliere){
        $this->bdd->queryAll("DELETE FROM logiciel_filiere WHERE LogicielID=?",array($id));
        foreach ($arrayFiliere as &$value) {
            $this->bdd->queryAll("INSERT INTO logiciel_filiere VALUES LogicielID=?,FiliereID=?",array($id,$value));
        }
        return true;
    }
}
$bdd = new Database();
$dao = new FiliereDAO($bdd);
if(isset($_GET['idLogiciel'])){
    echo json_encode($dao->GetFiliereByLogiciel($_GET['idLogiciel']));
} else 
if(isset($_GET['id_update_filiere'])){
    $dao->UpdateFiliereByLogiciel($_GET['id_update_filiere'],$_POST["array"]);
    echo json_encode(true);
} else
{
    echo json_encode($dao->GetFilieres());
}