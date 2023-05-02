<?php

require_once("database.php");

class LogicielDAO{
    private Database $bdd;
    function __construct(Database $bdd){
        $this->bdd = $bdd;
    }
    public function GetAll(): array{
        return $this->bdd->queryAll("SELECT * FROM Logiciel",array());
    }
    public function GetByFiliere(int $id) : array{
        return $this->bdd->queryAll("SELECT ID,nom,version,urlsetup,comment,visible,Utilisateurlogin,type,urlPort,urlImage,obsolete FROM logiciel_filiere JOIN logiciel ON logiciel.ID = logiciel_filiere.LogicielID WHERE logiciel_filiere.FiliereID = ?",array($id));
    }
}

$bdd = new Database();
$dao = new LogicielDAO($bdd);

if(isset($_GET['id_filiere'])){
    echo json_encode($dao->GetByFiliere($_GET['id_filiere']));
} else {
    echo json_encode($dao->GetAll());
}

