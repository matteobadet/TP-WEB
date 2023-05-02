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
}
$bdd = new Database();
$dao = new FiliereDAO($bdd);
echo json_encode($dao->GetFilieres());