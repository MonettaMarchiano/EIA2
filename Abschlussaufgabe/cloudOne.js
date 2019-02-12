/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Abschlussaufgabe_Rodelhang;
(function (Abschlussaufgabe_Rodelhang) {
    class CloudOne extends Abschlussaufgabe_Rodelhang.DrawObject {
        constructor() {
            super();
            this.xP = 50;
            this.yP = 100;
        }
        move() {
            if (this.xP > 500) {
                this.xP = 0;
            }
            this.xP += 6;
            this.draw();
        }
        draw() {
            Abschlussaufgabe_Rodelhang.crc.beginPath();
            Abschlussaufgabe_Rodelhang.crc.arc(this.xP - 50, this.yP, 45, 0, 2 * Math.PI);
            Abschlussaufgabe_Rodelhang.crc.arc(this.xP, this.yP, 50, 0, 2 * Math.PI);
            Abschlussaufgabe_Rodelhang.crc.arc(this.xP + 40, this.yP, 40, 0, 2 * Math.PI);
            Abschlussaufgabe_Rodelhang.crc.fillStyle = "#FFFFFF";
            Abschlussaufgabe_Rodelhang.crc.fill();
        }
    }
    Abschlussaufgabe_Rodelhang.CloudOne = CloudOne;
})(Abschlussaufgabe_Rodelhang || (Abschlussaufgabe_Rodelhang = {}));
//# sourceMappingURL=cloudOne.js.map