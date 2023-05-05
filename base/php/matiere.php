<?php
require_once("database.php");

class MatiereDAO{
    private Database $bdd; 

    function __construct(Database $bdd){
        $this->bdd = $bdd;
    }
    //Ce code renvoie la liste des matières
    public function GetMatieres() : array{
        return $this->bdd->queryAll("SELECT ID,nom,code FROM Matiere",array());
    }
}
$bdd = new Database();
$dao = new MatiereDAO($bdd);
echo json_encode($dao->GetMatieres());