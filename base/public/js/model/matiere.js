class Matiere {
    getID() {
        return this.ID;
    }
    setID(id) {
        this.ID = id;
    }
    getCode() {
        return this.code;
    }
    setCode(code) {
        this.code = code;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getLibelle() {
        return this.getCode() + " - " + this.getNom();
    }
}
//# sourceMappingURL=matiere.js.map