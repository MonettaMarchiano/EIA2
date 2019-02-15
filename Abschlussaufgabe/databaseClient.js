/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    // let serverAddress: string = "http://localhost:8100";
    let serverAddress = "https://eia2-marchian.herokuapp.com";
    function init(_event) {
    }
    function insert(_event) {
        let url = "command=insert" + "&score=" + Abschlussaufgabe_Rodelhang.score + "&name=" + Abschlussaufgabe_Rodelhang.name;
        sendRequest(url, handleInsertResponse);
    }
    function getHighscore(_event) {
        let url = "command=getHighscore";
        sendRequest(url, handleHighscoreResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleHighscoreResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=databaseClient.js.map