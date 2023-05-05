<?php
require_once("database.php");

class FiliereDAO{
    private Database $bdd; 

    function __construct(Database $bdd){
        $this->bdd = $bdd;
    }
    //Ce code renvoie la liste des filières
    public function GetFilieres() : array{
        return $this->bdd->queryAll("SELECT ID,nom FROM Filiere",array());
    }
    //Ce code renvoie les filières lié a une application
    public function GetFiliereByLogiciel(int $id){
        return $this->bdd->queryAll("SELECT ID,nom FROM filiere JOIN logiciel_filiere on logiciel_filiere.FiliereID=ID WHERE logiciel_filiere.LogicielID=?",array($id));
    }
    //Ce code met a jour les fiilières d'une application
    public function UpdateFiliereByLogiciel(int $id,array $arrayFiliere){
        $this->bdd->queryAll("DELETE FROM logiciel_filiere WHERE LogicielID=?",array($id));
        foreach ($arrayFiliere as &$value) {
            $this->bdd->queryAll("INSERT INTO logiciel_filiere VALUES (?,?)",array($id,$value));
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
    echo $_POST["array"];
    $dao->UpdateFiliereByLogiciel($_GET['id_update_filiere'],explode(",",$_POST["array"]));
    echo json_encode(true);
} else
{
    echo json_encode($dao->GetFilieres());
}