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
    let serverAddress = "https://eia-2-marchian.herokuapp.com";
    function init() {
    }
    function insert() {
        let url = "command=insert" + "&score=" + Abschlussaufgabe_Rodelhang.score + "&name=" + Abschlussaufgabe_Rodelhang.name;
        sendRequest(url, handleInsertResponse);
    }
    DatabaseClient.insert = insert;
    function getHighscore() {
        let url = "command=getHighscore";
        sendRequest(url, handleHighscoreResponse);
    }
    DatabaseClient.getHighscore = getHighscore;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
        }
    }
    function handleHighscoreResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
            let hs = JSON.parse(xhr.response);
            function sortScores(_h1, _h2) {
                if (_h1.score > _h2.score) {
                    return -1;
                }
                if (_h1.score < _h2.score) {
                    return 1;
                }
                return 0;
            }
            hs.sort(sortScores);
            console.log(hs);
            for (let i = 0; i < hs.length; i++) {
                let div = document.createElement("div");
                document.getElementById("highscore").appendChild(div);
                div.innerHTML = hs[i].name + ": ";
                div.innerHTML += hs[i].score;
            }
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=databaseClient.js.map