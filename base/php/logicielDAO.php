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
    public function Delete(int $id){
        $this->bdd->queryAll("DELETE FROM Logiciel WHERE ID=?",array($id));
    }
    public function GetLogicielByID(int $id){
        return $this->bdd->queryAll("SELECT * FROM Logiciel WHERE ID=?",array($id));
    }
    public function UpdateLogiciel(int $id,string $nom,string $version,string $type,bool $obsolete,string $urlSetup,string $urlTuto,string $urlPort,string $urlImage){
        $this->bdd->queryAll("UPDATE Logiciel SET nom=?,version=?,type=?,obsolete=?,urlSetup=?,urlTuto=?,urlPort=?,urlImage=? WHERE id=?",array($nom,$version,$type,$obsolete,$urlSetup,$urlTuto,$urlPort,$urlImage,$id));
        return true;
    }
}

$bdd = new Database();
$dao = new LogicielDAO($bdd);

if(isset($_GET['id_filiere'])){
    echo json_encode($dao->GetByFiliere($_GET['id_filiere']));
} else 
if(isset($_GET['id_to_remove'])){
    $dao->Delete($_GET['id_to_remove']);
} else
if(isset($_GET['id_to_edit'])){
    echo json_encode($dao->GetLogicielByID($_GET['id_to_edit']));
} else
if(isset($_POST['id']) && isset($_POST['nom']) && isset($_POST['version']) && isset($_POST['type']) && isset($_POST['obsolete']))
{
    $dao->UpdateLogiciel($_POST['id'],$_POST['nom'],$_POST['version'],$_POST['type'],$_POST['obsolete'],$_POST['urlSetup'],$_POST['urlTuto'],$_POST['urlPort'],$_POST['urlImage']);
    echo json_encode(true);
} else {
    echo json_encode($dao->GetAll());
}

