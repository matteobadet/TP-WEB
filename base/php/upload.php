<?php
//Ce code upload le fichier dans le fichier files du serveur
$filename = $_FILES['file']['name'];
$src = $_FILES['file']['tmp_name'];
if(is_uploaded_file($src)){
    move_uploaded_file($src,'../files/'.$filename);
}