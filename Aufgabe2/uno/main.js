/*
Aufgabe: 2
Name: Monetta Marchiano
Matrikel: 256063
Datum: 21.10.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
//namespace machen 
var Aufgabe2;
(function (Aufgabe2) {
    //ruft function init auf
    document.addEventListener("DOMContentLoaded", init); //sobald DOM geladen ist, wird Funktion init ausgeführt
    function init() {
        let cards = promptCards(); //cards wird durch function promptCards der Rückgabewert der prompt-Funktion zugewiesen;  --> das was bei prompt rauskommt, ist der Wert von Cards
        //schaue dir "promptCards()" an
        console.log(cards + " cards"); //Debugger
        //Rufe createGame auf(mit dem Parameter cards auf dem prompt)
        //createGame(cards);
    }
    function promptCards() {
        let cards = prompt("Ziehe zwischen 5 und 10 Karten!");
        let cardsSum = parseInt(cards); //parseInt = konvertiert String zu Number
        //folgende if-else-Bedingung validiert die Eingabe vom prompt-Fenster
        //definition für falsche Eingabe (also keine Zahl oder im falschen Intervall)
        if (isNaN(cardsSum) || cardsSum < 5 || cardsSum > 10) {
            alert("Falsche Eingabe. Versuche es von vorne.");
            console.log("invalide input");
            init();
        }
        else {
            console.log("valide input");
        }
    }
    function createGame(_cards) {
        console.log("*call function createGame*");
        //semantischen elemente werden erstellt
        //main erstellen *Schema um Elemente in ts zu erstellen, damit das HTML dynamisch ist*
        //hier wird eine Variable vom Typ HTMLElement erstellt; 
        let main = document.createElement("main"); //eine Methode als Wert zugewiesen (document.kreiere ein Element("welcherArt")
        //hier wird "main" ein Ort zugewiesen >> body
        //document.*ELTERNELEMENT des erstellten Elements*.appendChild(*Variable des neuen Elements*)
        //also zuerst <body> </body> danach <body> <main></main> </body>
        document.body.appendChild(main);
        console.log("create main");
        // das ist die Funktion, die die Karten generiert
        // sie hat als Parameter u.a die _cards aus dem prompt, die info muss weitergetragen werden
        createGameArea(_cards, main);
        //Funktion die den Footer generiert
        createFooter();
    }
    function createGameArea(_cards, _main) {
        console.log("*call function createGameArea*");
        //kompletter Satz UNO-Karten 
        // vom Typen String Array, d.h. eine Liste mit Strings, diese sind gleichzeitig die src für die Strings für die cardImg
        let cardContentAll = [
            //blue
            "img/blue0.png", "img/blue1.png", "img/blue2.png", "img/blue3.png", "img/blue4.png",
            "img/blue5.png", "img/blue6.png", "img/blue7.png", "img/blue8.png", "img/blue9.png",
            "img/blueChange.png", "img/blueNono.png", "img/blue2+.png",
            "img/blue1.png", "img/blue2.png", "img/blue3.png", "img/blue4.png",
            "img/blue5.png", "img/blue6.png", "img/blue7.png", "img/blue8.png", "img/blue9.png",
            "img/blueChange.png", "img/blueNono.png", "img/blue2+.png",
            //green
            "img/green0.png", "img/green1.png", "img/green2.png", "img/green3.png", "img/green4.png",
            "img/green5.png", "img/green6.png", "img/green7.png", "img/green8.png", "img/green9.png",
            "img/greenChange.png", "img/greenNono.png", "img/green2+.png",
            "img/green1.png", "img/green2.png", "img/green3.png", "img/green4.png",
            "img/green5.png", "img/green6.png", "img/green7.png", "img/green8.png", "img/green9.png",
            "img/greenChange.png", "img/greenNono.png", "img/green2+.png",
            //red
            "img/red0.png", "img/red1.png", "img/red2.png", "img/red3.png", "img/red4.png",
            "img/red5.png", "img/red6.png", "img/red7.png", "img/red8.png", "img/red9.png",
            "img/redChange.png", "img/redNono.png", "img/red2+.png",
            "img/red1.png", "img/red2.png", "img/red3.png", "img/red4.png",
            "img/red5.png", "img/red6.png", "img/red7.png", "img/red8.png", "img/red9.png",
            "img/redChange.png", "img/redNono.png", "img/red2+.png",
            //yellow
            "img/yellow0.png", "img/yellow1.png", "img/yellow2.png", "img/yellow3.png", "img/yellow4.png",
            "img/yellow5.png", "img/yellow6.png", "img/yellow7.png", "img/yellow8.png", "img/yellow9.png",
            "img/yellowChange.png", "img/yellowNono.png", "img/yellow2+.png",
            "img/yellow1.png", "img/yellow2.png", "img/yellow3.png", "img/yellow4.png",
            "img/yellow5.png", "img/yellow6.png", "img/yellow7.png", "img/yellow8.png", "img/yellow9.png",
            "img/yellowChange.png", "img/yellowNono.png", "img/yellow2+.png",
            //extra
            "img/colorChange.png", "img/colorChange.png", "img/colorChange.png", "img/colorChange.png",
            "img/colorChange4+.png", "img/colorChange4+.png", "img/colorChange4+.png", "img/colorChange4+.png"];
        shuffleArray(cardContentAll); //Funktion, weiter unten, wird aufgerufen (Befehl zum Mischen; Array wird als Parameter in die Funktio übergeben)
        console.log(cardContentAll); //neues Array wird in der Konsole ausgegeben
        // array zieht aus großem Array die anzahl der karten, die eingegeben wurde >> neues Array besteht aus teil des alten
        // array.splice(start, end(not included))
        // cCH.[zahl] >> cardContentNeeded[index]
        // sprich die ersten zB 5 Karten (cCH.[0],cCH.[1],cCH.[2],cCH.[3],cCH.[4])
        let cardContentHand = cardContentAll.slice(0, _cards); //ist vom Typ Array mit Strings(Liste von Strings); durch slice wird großes array nicht angerührt
        //--> die Länge des Arrays richtet sich nach der Eingabe im Promptfenster
        // warum? für die Eingabe, damit es DYNAMISCH bleibt. weil die Anzeige abhängig von der Eingabe ist  
        // selbes prinzip
        // sprich die 6. karte (cCH.[5])
        // DO NOT CHANGE, das ist die karte, die obligatorisch offen liegt
        let cardContentOpen = cardContentAll.slice(_cards, (_cards + 1));
        //--> nicht abhängig von Eingabe, demnach NICHT DYNAMISCH
        console.log(cardContentOpen);
        // selbes prinzip
        // zieht den rest der karte raus, also inkl. 7. karte bis zum schluss (cCH.[6],cCH.[7],..[...]..cCH.[107],cCH.[108])
        // "simuliert" den stack
        let cardContentStack = cardContentAll.slice((_cards + 1), cardContentAll.length);
        // --> es kopiert restliche Werte bis zum Ende aus dem großen Array raus
        console.log(cardContentStack);
        // Stack
        // AufnahmeStapel neue Karten
        let stackSec = document.createElement("section");
        stackSec.id = "stackSec"; //das Element hat die ID "stackSec"; falls es für css gebraucht, für bspw. spätere Spielogik
        _main.appendChild(stackSec); //_main ist parent-Element von stackSec
        console.log("load Stack Section");
        // rufe function createCard mit den paramentern src und parent, also die src-Angabe + zukünftiges ParentElement, wo die Karte rein soll
        // src >> festes Bild der Rückseite || parent >> stackSec
        createCard("img/unoBack.png", stackSec); //extra mit diesen Variablen, damit man sowohl einen festen src-Wert (s. stackSec), als auch mit einer vorgehenden for-Schleife ein Array abarbeiten kann
        // Discard
        // AbwurfStapel Karten
        let discardSec = document.createElement("section");
        discardSec.id = "discardSec";
        _main.appendChild(discardSec);
        console.log("load Abwurf Section");
        // rufe function createCard mit den paramentern src und parent, also die src-Angabe + zukünftigesParentElement
        // src >> erstes Element in cCOpen || parent >> discardSec
        createCard(cardContentOpen[0], discardSec);
        // Hand
        // HandKarten
        let handSec = document.createElement("section");
        handSec.id = "handSec"; //das Element hat die ID "handSec"
        _main.appendChild(handSec);
        console.log("load Hand Section");
        // for-schleife durchläuft den array cardContentHand(der so lang ist wie cards)
        // also cards zB 5 >> cCH.lenght = 5 ABER cCH.[0], cCH.[1], cCH.[2], cCH.[3], cCH.[4] || weil ein computer fängt immer an von 0 zu zählen
        // deshalb passt hier die bedingung
        // "variable i = 0 || läuft so lange, wie [i] kleiner ist als die Länge von cCH"
        // fängt an mit i=0, dann i=1...i=4 passt noch, weil kleiner als cCH.length. bei i=5 ist es ==cCH, deshalb stimmt die Bedingung nichtmehr und Loop bricht ab
        for (let i = 0; i < cardContentHand.length; i++) {
            console.log(cardContentHand[i]);
            // rufe function createCard mit den paramentern src und parent, also die src-Angabe + zukünftigesParentElement
            // src >> Element aus cCHand mit [i] (Zahl für index) aus der übergeordneten for-schleife || parent >> handSec
            createCard(cardContentHand[i], handSec);
        }
    }
    // diese funktion shuffelt das Array durcheinander
    // simuliert mischeln
    // aus dem internet
    // man kann schwer zufall simulieren, das ist lediglich eine annäherung daran
    function shuffleArray(_array) {
        console.log("*call shuffleArray*");
        let b = 0;
        let rndm = null; //wie undefined
        for (let a = _array.length - 1; a > 0; a -= 1) {
            b = Math.floor(Math.random() * (a + 1));
            rndm = _array[a];
            _array[a] = _array[b];
            _array[b] = rndm;
        }
    }
    //das ist die Funktion in der eine einzelne kate erstellt wird, also der div, der die karte sein soll
    function createCard(_src, _parent) {
        console.log("*call function createCard*");
        // div erstellen und in _parent(wird jwls. als parameter übergeben) hochladen
        let card = document.createElement("div");
        // substring schneidet ab von string || variable.substring(start, end not inkl.)
        // [(0-4) und (ende - (ende-4))], also wird aus img/green1.png "green1" als id
        // _src.length gibt die länge des string zurück
        // cardImg.id = _src.substring(4, _src.length - 4);
        card.id = _src.substring(4, _src.length - 4);
        //--> die ID der card besteht aus der _src, die durch die Methode substring beschnitten wird; es ist Variabel je nach Länge, deshalb _src.length
        // lade card in sein parent
        _parent.appendChild(card);
        // img wird erstellt, mit einer src befüllt und in den gerade erstellten div "card" geladen
        //   wird als parameter oben (ursprüngl. aus dem array) übergeben
        let cardImg = document.createElement("img");
        cardImg.src = _src; // da das img-Element immer src braucht, wird der Wert _src zugewiesen
        // lade das img in des div "card"
        card.appendChild(cardImg);
        console.log(card.id);
    }
    function createFooter() {
        console.log("*call function createFooter*");
        let footer = document.createElement("footer");
        document.body.appendChild(footer);
        let footerP = document.createElement("p");
        footerP.innerHTML = "© Monetta Marchiano";
        footer.appendChild(footerP);
        let footerSpan = document.createElement("span");
        footer.appendChild(footerSpan);
        let userLink = document.createElement("a");
        userLink.href = "https://monettamarchiano.github.io";
        userLink.target = "_blank";
        userLink.innerText = "Userpage";
        footerSpan.appendChild(userLink);
        console.log("load footer");
    }
})(Aufgabe2 || (Aufgabe2 = {})); //namespace ende        
//# sourceMappingURL=main.js.map