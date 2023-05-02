<?php

/**
 * Database connexion  
  * @version 1.1
 * @author aguidet
 */
class Database
{    
    private string $host = "localhost";
    private string $base = "grp-141_s4_progweb"; // <- put your database name
    private string $user="grp-141"; // <-- put your DB user (grp-xxx)
    private string $pass="oldw02g0"; // <--- put your DB password (see mdp.txt)
    private PDO $pdo;

    /**
     * Initialize the database
     */
    public function __construct()
    {
        $this->pdo = new PDO("mysql:host=$this->host;dbname=$this->base",$this->user,$this->pass);
        $this->pdo->exec("SET AUTOCOMMIT=1;");
    }

    /**
     * Execute a query with one value returned
     * @param string $req the query, may have parameters
     * @param array $params array with parameters
     * @return mixed data send by DB, associative array
     */
    public function queryOne(string $req, array $params)
    {
        $data=null;
        $r = $this->pdo->prepare($req);
        $r->execute($params);
        $data = $r->fetch(PDO::FETCH_ASSOC);
        return $data;
    }

    /**
     * Execute a query with many values returned
     * @param string $req the query, may have parameters
     * @param array $params array with parameters
     * @return mixed data send by DB, associative array
     */
    public function queryAll(string $req, array $params)
    {
        $data=null;
        $r = $this->pdo->prepare($req);
        $r->execute($params);
        $data = $r->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    }

    /**
     * Execute a SQL order (no returns)
     * @param string $req the parametred query
     * @param array $params parameters
     */
    public function execute(string $req, array $params)
    {
        $r = $this->pdo->prepare($req);
        $r->execute($params);
    }
}