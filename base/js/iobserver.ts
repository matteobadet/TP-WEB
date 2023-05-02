interface IObserver {
    /**
     * Notify the deletion of a software
     * @param log the software to delete
     */
    notifyDelete(log: Logiciel);

}