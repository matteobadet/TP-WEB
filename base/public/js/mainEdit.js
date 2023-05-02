window.onload = () => {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idLogiciel = +urlParams.get('idLogiciel');
    let details = new ViewDetails();
    details.InitialiseLogiciel(idLogiciel);
};
//# sourceMappingURL=mainEdit.js.map