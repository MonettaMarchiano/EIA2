/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Abschlussaufgabe_Rodelhang;
(function (Abschlussaufgabe_Rodelhang) {
    class Tree extends Abschlussaufgabe_Rodelhang.DrawObject {
        constructor() {
            super();
            this.xP = 40 + Math.random() * 200;
            this.yP = 450 + Math.random() * 150;
            this.color = "#0B6138";
        }
        draw() {
            Abschlussaufgabe_Rodelhang.crc.fillStyle = "#886A08";
            Abschlussaufgabe_Rodelhang.crc.fillRect(this.xP - 8, this.yP + 60, 12, 15);
            Abschlussaufgabe_Rodelhang.crc.beginPath();
            Abschlussaufgabe_Rodelhang.crc.moveTo(this.xP, this.yP);
            Abschlussaufgabe_Rodelhang.crc.lineTo(this.xP + 30, this.yP + 60);
            Abschlussaufgabe_Rodelhang.crc.lineTo(this.xP - 30, this.yP + 60);
            Abschlussaufgabe_Rodelhang.crc.closePath();
            Abschlussaufgabe_Rodelhang.crc.fillStyle = this.color;
            Abschlussaufgabe_Rodelhang.crc.fill();
        }
    }
    Abschlussaufgabe_Rodelhang.Tree = Tree;
})(Abschlussaufgabe_Rodelhang || (Abschlussaufgabe_Rodelhang = {}));
//# sourceMappingURL=tree.js.map