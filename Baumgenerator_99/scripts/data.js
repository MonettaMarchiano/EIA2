/*
Aufgabe: 5
Name: Monetta Marchiano
Matrikel: 256063
Datum: 02.12.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var probs12;
(function (probs12) {
    ;
    ;
    probs12.items = {
        "Baumart": [
            { name: "Tanne", price: 30.0 },
            { name: "Fichte", price: 30.0 },
            // { name: "Kiefer", price: 30.0 },
            { name: "Plastik", price: 20.0 }
        ],
        "Halterung": [
            { name: "keine", price: 0.0 },
            { name: "Seilzug", price: 10.0 },
            { name: "Klemmschraube", price: 5.0 }
        ],
        "Beleuchtung": [
            { name: "Kerze weiss", price: 2.0 },
            { name: "Kerze rot", price: 2.0 },
            //  { name: "Kerze Bienenwachs", price: 2.0 },
            { name: "20er Lichterkette kaltweiß", price: 10.0 },
            { name: "20er Lichterkette warmweis", price: 10.0 }
        ],
        "Glaskugeln": [
            { name: "silber", price: 3.0 },
            { name: "gold", price: 3.0 },
            { name: "rot", price: 3.0 },
            { name: "weiß", price: 3.0 }
        ],
        "Schmuck": [
            //  { name: "Engel", price: 5.0 },
            { name: "Stern", price: 5.0 },
            { name: "Herz", price: 5.0 }
        ],
        "Lieferdienst": [
            { name: "DHL", price: 5.0 },
            { name: "UPS", price: 5.0 },
            { name: "Hermes", price: 5.0 }
        ],
        "Lieferart": [
            { name: "Standard", price: 0.0 },
            { name: "24h-Express", price: 5.0 },
            { name: "Morning-Express", price: 10.0 }
        ]
    };
})(probs12 || (probs12 = {}));
//# sourceMappingURL=data.js.map