"use strict";
//Schaue bei Node.js (Mindmap)
const Http = require("http"); // importiert eine Datai als http
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    var wbk_99;
    (function (wbk_99) {
        console.log("Starting server"); //Konsolenausgabe von "Starting server"
        let port = process.env.PORT; //process.env.PORT ist eine Nummer, port definiert welchem Server du bist (process.env = Umgebung des Prozesses)
        if (port == undefined)
            port = 8100; //dann soll port 8100 sein um mit dem port verbunden zu sein
        let server = Http.createServer(); //variable mit dem Namen Server vom Typ Http.Server; wird gleichgesetzt mit der Funktion Http.createServer()
        server.addListener("request", handleRequest); // Listener auf request gesetzt, handleRequest = Funktion für den Händler
        server.addListener("listening", handleListen); //Listener auf listening, handleListen = Funktion für den Händler 
        server.listen(port); //schaut nach welcher port benutzt wird
        function handleListen() {
            console.log("Listening"); //gibt "Listening" in der Console aus 
        }
        function handleRequest(_request, _response) {
            console.log("I hear voices!"); //Konsolenausgabe von "I heare voices!"
            _response.setHeader("content-type", "text/html; charset=utf-8"); //dem Header werden die Werte die "content-type", "text/html; charset=utf-8" zugeteilt, um die Nachricht auszugeben
            _response.setHeader("Access-Control-Allow-Origin", "*"); //dem Header wird Access-Control-Allow-Origin hinzugefügt; damit erlaubt er die Aussage des Nutzers mit der Quelle zu teilen
            _response.write(_request.url); //Ruft Informationen über die URL der aktuellen Anforderung ab.
            console.log(_request.url); //Konsolenausgabe von _request.url
            let url = Url.parse(_request.url, true).query;
            console.log(url);
            for (let key in url) {
                console.log(url[key]);
                console.log(key);
                _response.write(key + " = " + url[key] + "<br>");
            }
            _response.end(); //Konversation wird beendet
        }
    })(wbk_99 || (wbk_99 = {}));
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map