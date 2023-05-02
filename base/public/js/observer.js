class Observable {
    register(obs) {
        this.observers.push(obs);
    }
    unregister(obs) {
    }
    constructor() {
        this.observers = new Array();
    }
}
//# sourceMappingURL=observer.js.map