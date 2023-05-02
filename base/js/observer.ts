
class Observable{
    observers : Array<IObserver>;
    register(obs:IObserver){
        this.observers.push(obs);
    }
    unregister(obs:IObserver){
        
    }
    constructor(){
        this.observers = new Array<IObserver>();
    }

    public notifyDelete(log: Logiciel){
        this.observers.forEach(value => {
            value.notifyDelete(log);
        })
    }
}
