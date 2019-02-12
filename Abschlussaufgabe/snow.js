/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Abschlussaufgabe_Rodelhang;
(function (Abschlussaufgabe_Rodelhang) {
    class Snow extends Abschlussaufgabe_Rodelhang.DrawObject {
        constructor() {
            super();
            this.xP = Math.random() * 500;
            this.yP = Math.random() * 700;
        }
        move() {
            this.yD = 5;
            this.xD = Math.random() * 0;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.yP > 700) {
                this.yP = 0;
            }
            this.draw();
        }
        draw() {
            Abschlussaufgabe_Rodelhang.crc.beginPath();
            Abschlussaufgabe_Rodelhang.crc.arc(this.xP, this.yP, 5, 0, 2 * Math.PI);
            Abschlussaufgabe_Rodelhang.crc.fillStyle = "#FFFFFF";
            Abschlussaufgabe_Rodelhang.crc.fill();
            Abschlussaufgabe_Rodelhang.crc.lineWidth = .3;
            Abschlussaufgabe_Rodelhang.crc.strokeStyle = "#707070";
            Abschlussaufgabe_Rodelhang.crc.stroke();
        }
    }
    Abschlussaufgabe_Rodelhang.Snow = Snow;
})(Abschlussaufgabe_Rodelhang || (Abschlussaufgabe_Rodelhang = {}));
//# sourceMappingURL=snow.js.map