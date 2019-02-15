/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace DatabaseClient {
    window.addEventListener("load", init);
    // let serverAddress: string = "http://localhost:8100";
    let serverAddress: string = "https://eia-2-marchian.herokuapp.com";

    function init(): void {
    }

    export function insert(): void {
        let url: string = "command=insert" + "&score=" + Abschlussaufgabe_Rodelhang.score + "&name=" + Abschlussaufgabe_Rodelhang.name;
        sendRequest(url, handleInsertResponse);
    }

    export function getHighscore(): void {
        let url: string = "command=getHighscore";
        sendRequest(url, handleHighscoreResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleHighscoreResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);

            let hs: Highscore[] = JSON.parse(xhr.response);

            function sortScores(_h1: Highscore, _h2: Highscore): number {
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
        }
    }
}