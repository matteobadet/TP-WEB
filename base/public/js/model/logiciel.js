class Logiciel {
    get ID() {
        return this._ID;
    }
    set ID(value) {
        this._ID = value;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get urlSetup() {
        return this._urlSetup;
    }
    set urlSetup(value) {
        this._urlSetup = value;
    }
    get urlImage() {
        return this._urlImage;
    }
    set urlImage(value) {
        this._urlImage = value;
    }
    get urlTuto() {
        return this._urlTuto;
    }
    set urlTuto(value) {
        this._urlTuto = value;
    }
    get urlPort() {
        return this._urlPort;
    }
    set urlPort(value) {
        this._urlPort = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get obsolete() {
        return this._obsolete;
    }
    set obsolete(value) {
        this._obsolete = value;
    }
    get nomversion() {
        let res = this._nom + " " + this._version + " (obsolète)";
        if (!this._obsolete) {
            res = this._nom + " " + this._version;
        }
        return res;
    }
}
//# sourceMappingURL=logiciel.js.map