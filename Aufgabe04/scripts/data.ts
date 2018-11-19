/* 
Aufgabe: 4
Name: Monetta Marchiano
Matrikel: 256063
Datum: 18.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A04_wbk {

    export interface Item {
        art: string;
        name: string;
        add: string;
        preis: string;
    }

    export let items: Item[] = [
    
        { art: "baumart", name: "tanne", add: "", preis: "25.0" },
        { art: "baumart", name: "fichte", add: "", preis: "29.99" },
        { art: "baumart", name: "kiefer", add: "", preis: "24.95" },
        { art: "baumart", name: "plastik", add: "", preis: "19.99" },
        
        { art: "halterung", name: "keine", add: "", preis: "0.00" },
        { art: "halterung", name: "klemmschraube", add: "", preis: "14.95" },
        { art: "halterung", name: "seilzug", add: "", preis: "24.95" },
        { art: "halterung", name: "klemmbacken", add: "", preis: "19.95" },
        
        { art: "beleuchtung", name: "lichterkette", add: "warmweiss|kaltweiss", preis: "30.0|26.95" },
        { art: "beleuchtung", name: "kerzen", add: "weiss|rot|bienenwachs", preis: "15.55|17.25|23.20" },
        
        { art: "schmuck", name: "kugel", add: "weiss|rot|grün|gold|roségold|silber", preis: "0.8|0.8|0.8|1.2|1.2|1.2" },
        { art: "schmuck", name: "glocke", add: "gold|roségold|silber", preis: "1.45|1.45|1.45" },
        { art: "schmuck", name: "stern", add: "filz|draht|stroh", preis: "0.65|1.45|1.19" },
        { art: "schmuck", name: "engel", add: "filz|draht|stroh", preis: "0.65|1.45|1.19" },
        { art: "schmuck", name: "herz", add: "filz|draht|stroh|kristall", preis: "0.65|1.45|1.19|9.99" },
        { art: "schmuck", name: "lametta", add: "gold|roségold|silber", preis: "0.5|0.5|0.5" },
        { art: "schmuck", name: "perlenkette", add: "gold|roségold|silber", preis: "1.5|1.5|1.5" },
        
        { art: "bio-schmuck", name: "orangenscheibe", add: "", preis: "1.99" },
        { art: "bio-schmuck", name: "zimtstange", add: "", preis: "3.49" },
        { art: "bio-schmuck", name: "zuckerstange", add: "", preis: "3.49" },
        { art: "bio-schmuck", name: "zapfen", add: "", preis: "0.99" },
        
        { art: "spitze", name: "keine", add: "", preis: "0.0" },
        { art: "spitze", name: "engel", add: "weiss|rot|gold|roségold|silber", preis: "4.95" },
        { art: "spitze", name: "stern", add: "weiss|rot|gold|roségold|silber", preis: "4.95" },
        
        { art: "lieferung", name: "DHL", add: "standard|24h-express|morning-express", preis: "0.0|4.95|14.95" },
        { art: "lieferung", name: "Hermes", add: "standard|24h-express|morning-express", preis: "2.5|4.5|17.25" },
        { art: "lieferung", name: "UPS", add: "standard|24h-express", preis: "2.9|5.95" }
        
        ];    
}