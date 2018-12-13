namespace Boxes {
    let n: number = 5;             
    let c: string;
    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < n; i++) {      //geht so lange weiter bis 4. Stelle 
        y += (i == 2) ? 20 : 50;             //if else (Konditionalbedingung: ist mein i gleich 2 --> erster durchlauf falsch, sprich +50 drauf auf y (wenn richtig wäre, dann +20 drauf auf y)
        x = (x + 170) % 400;                //% = modulo: wie oft geht meine 400 in die 170 rein --> geht also 0 mal rein, rest also 170 (x=170)    
        switch (i) {                        // if else Bedingung 
            case 0:
                c = "#ff0000";
                break;
            case 1:                         //direkt zu default 
            case 4:
                c = "#00ff00";
                break;                      //bricht ab, weils den case 3 und default nicht durchläuft
            case 3:
                continue;
            default:                        //wenns die anderen Werte nicht sind
                c = "#0000ff";
        }
        for (let a: number = 50; a > 0; a -= 20) {              //wert a=50; größer als 0
            placeDiv(c, x, y, a, a);                            // placeDiv wird aufgerufen und Parameter werden bestimmt
            if (i == 4)                                         //wenn mein wert 4 erreichen sollte, bricht es ab
                break;
        }
    }


    function placeDiv(_color: string, _x: number, _y: number, _width: number, _height: number): void {      //funktion wird initiert
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        
        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
}