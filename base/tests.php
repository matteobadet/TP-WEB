<?php

require_once("php/database.php");
$bdd = new Database();
$data = $bdd->queryAll("SELECT * FROM Filiere",array());

echo "<h1>Test</h1>";

echo "<h2>Simple database test : select all filieres</h2>";
echo json_encode($data);

echo "<h2>Test : get filieres by DAO</h2>";
include("php/filieres.php");

echo "<h2>Test : get matieres by DAO</h2>";
include("php/matiere.php");

echo "<h2>Simple database test : select all logiciels</h2>";
require_once("php/logicielDAO.php");
$logicielsDAO = new LogicielDAO($bdd);
$logiDATA = $logicielsDAO->getAll();
echo json_encode($logiDATA);

echo "<h2>Simple database test : select logiciel by filiere</h2>";
$logiDATA = $logicielsDAO->GetByFiliere(1);
echo json_encode($logiDATA);

?>  