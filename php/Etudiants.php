<?php 

class Etudiants {
    private $id;
    private $nom;
    private $prenom;
    private $email;

    public function __construct($id, $nom, $prenom, $email) {
        $this->id = $id;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->email = $email;
    }

    public function getId() {
        return $this->id;
    }

    public function getNom() {
        return $this->nom;
    }

    public function getPrenom() {
        return $this->prenom;
    }

    public function getEmail() {
        return $this->email;
    }


}