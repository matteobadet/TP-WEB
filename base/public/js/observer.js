class Observable {
    register(obs) {
        this.observers.push(obs);
    }
    unregister(obs) {
    }
    constructor() {
        this.observers = new Array();
    }
    notifyDelete(log) {
        this.observers.forEach(value => {
            value.notifyDelete(log);
        });
    }
}
//# sourceMappingURL=observer.js.map