/*
Aufgabe: 5
Name: Monetta Marchiano
Matrikel: 256063
Datum: 25.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A05_wbk;
(function (A05_wbk) {
    ;
    ;
    A05_wbk.items = {
        "baumart": [
            { name: "tanne", attr: [], price: [0.0] },
            { name: "fichte", attr: [], price: [0.0] },
            { name: "kiefer", attr: [], price: [0.0] },
            { name: "plastik", attr: [], price: [0.0] }
        ],
        "halterung": [
            { name: "keine", attr: [], price: [0.0] },
            { name: "seilzug", attr: [], price: [0.0] },
            { name: "klemmschraube", attr: [], price: [0.0] },
            { name: "klemmbacken", attr: [], price: [0.0] }
        ],
        //Beleuchtungsartikel
        "beleuchtung": [
            { name: "kerze", attr: ["weiss", "rot", "bienenwachs"], price: [0.0, 0.0, 0.0] },
            { name: "lichterkette", attr: ["warmweiss", "kaltweiss"], price: [0.0, 0.0] }
        ],
        //Schmuckartikel
        "baumschmuck": [
            { name: "glaskugel", attr: ["rot", "silber", "roségold", "gold"], price: [0.0, 0.0, 0.0, 0.0] },
            { name: "glasglocke", attr: ["silber", "roségold", "gold"], price: [0.0, 0.0, 0.0] },
            { name: "stern", attr: ["silber", "roségold", "gold", "filz", "draht", "stroh"], price: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { name: "engel", attr: ["silber", "roségold", "gold", "filz", "draht", "stroh"], price: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { name: "herz", attr: ["kristall", "filz", "draht", "stroh"], price: [0.0, 0.0, 0.0, 0.0] },
            { name: "lametta", attr: ["silber", "roségold", "gold"], price: [0.0, 0.0, 0.0] },
            { name: "natur", attr: ["orangenscheibe", "zimtstange", "zuckerstange", "zapfen"], price: [0.0, 0.0, 0.0, 0.0] }
        ],
        "lieferung": [
            { name: "Hermes", attr: ["standard", "24h-express", "morning-express"], price: [0.0, 0.0, 0.0] },
            { name: "DHL", attr: ["standard", "24h-express", "morning-express"], price: [0.0, 0.0, 0.0] },
            { name: "UPS", attr: ["standard", "24h-express", "morning-express"], price: [0.0, 0.0, 0.0] }
        ]
    };
})(A05_wbk || (A05_wbk = {}));
//# sourceMappingURL=data.js.map