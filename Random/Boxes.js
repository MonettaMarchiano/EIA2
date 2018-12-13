var Boxes;
(function (Boxes) {
    let n = 5;
    let c;
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
        y += (i == 2) ? 20 : 50; //if else (Konditionalbedingung: ist mein i gleich 2 --> erster durchlauf falsch, sprich +50 drauf auf y (wenn richtig wäre, dann +20 drauf auf y)
        x = (x + 170) % 400; //% = modulo: wie oft geht meine 400 in die 170 rein --> geht also 0 mal rein, rest also 170 (x=170)    
        switch (i) {
            case 0:
                c = "#ff0000";
                break;
            case 1: //direkt zu default 
            case 4:
                c = "#00ff00";
                break; //bricht ab, weils den case 3 und default nicht durchläuft
            case 3:
                continue;
            default:
                c = "#0000ff";
        }
        for (let a = 50; a > 0; a -= 20) {
            placeDiv(c, x, y, a, a); // placeDiv wird aufgerufen und Parameter werden bestimmt
            if (i == 4)
                break;
        }
    }
    function placeDiv(_color, _x, _y, _width, _height) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
})(Boxes || (Boxes = {}));
//# sourceMappingURL=Boxes.js.map