/*
Aufgabe: 5
Name: Monetta Marchiano
Matrikel: 256063
Datum: 25.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A06_wbk;
(function (A06_wbk) {
    ;
    ;
    A06_wbk.items = {
        "Baumart": [
            { name: "Tanne", attr: [], price: [0.0] },
            { name: "Fichte", attr: [], price: [0.0] },
            { name: "Kiefer", attr: [], price: [0.0] },
            { name: "Plastik", attr: [], price: [0.0] }
        ],
        "Halterung": [
            { name: "keine", attr: [], price: [0.0] },
            { name: "Seilzug", attr: [], price: [0.0] },
            { name: "Klemmschraube", attr: [], price: [0.0] },
            { name: "Klemmbacken", attr: [], price: [0.0] }
        ],
        "Beleuchtung": [
            { name: "Kerze", attr: ["weiss", "rot", "Bienenwachs"], price: [0.0, 0.0, 0.0] },
            { name: "Lichterkette", attr: ["warmweiss", "kaltweiss"], price: [0.0, 0.0] }
        ],
        "Baumschmuck": [
            { name: "Kugel", attr: ["Glas|silber", "Glas|roségold", "Glas|gold", "Glas|rot", "Glas|weiß", "Glas|grün"], price: [0.0, 0.0, 0.0, 0.0] },
            { name: "Glocke", attr: ["Glas|silber", "Glas|roségold", "Glas|gold"], price: [0.0, 0.0, 0.0] },
            { name: "Stern", attr: ["Metall|silber", "Metall|roségold", "Metall|gold", "Filz", "Draht", "Stroh"], price: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { name: "Engel", attr: ["Metall|silber", "Metall|roségold", "Metall|gold", "Filz", "Draht", "Stroh"], price: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { name: "Herz", attr: ["Glas|tansparent", "Glas|rot", "Filz", "Draht", "Stroh", "Kristall"], price: [0.0, 0.0, 0.0, 0.0] },
            { name: "Lametta", attr: ["silber", "roségold", "gold"], price: [0.0, 0.0, 0.0] },
            { name: "Natur", attr: ["Orangenscheibe", "Zimtstange", "Zuckerstange", "Zapfen"], price: [0.0, 0.0, 0.0, 0.0] }
        ],
        "Lieferung": [
            { name: "Hermes", attr: ["Standard", "24h-Express", "Morning-Express"], price: [0.0, 0.0, 0.0] },
            { name: "DHL", attr: ["Standard", "24h-Express", "Morning-Express"], price: [0.0, 0.0, 0.0] },
            { name: "UPS", attr: ["Standard", "24h-Express", "Morning-Express"], price: [0.0, 0.0, 0.0] }
        ]
    };
    ;
    ;
    A06_wbk.basketItems = {
        "Baumart": [
            { name: "Kugel", attr: "Glas|silber", num: 1, price: 1.5 }
        ],
        "Halterung": [
            { name: "Kugel", attr: "Glas|silber", num: 2, price: 1.0 }
        ],
        "Beleuchtung": [
            { name: "Kugel", attr: "Glas|silber", num: 4, price: 3.0 },
            { name: "Kugel", attr: "Glas|silber", num: 3, price: 0.0 }
        ],
        "Baumschmuck": [
            { name: "Kugel", attr: "Glas|silber", num: 3, price: 0.0 },
            { name: "Kugel", attr: "Glas|silber", num: 3, price: 0.0 }
        ],
        "Lieferung": [
            { name: "Kugel", attr: "Glas|silber", num: 3, price: 0.0 }
        ]
    };
})(A06_wbk || (A06_wbk = {}));
//# sourceMappingURL=data.js.map