/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Abschlussaufgabe_Rodelhang;
(function (Abschlussaufgabe_Rodelhang) {
    class Snowball extends Abschlussaufgabe_Rodelhang.DrawObject {
        constructor() {
            super();
            this.radius = 25;
        }
        move() {
            this.radius -= 5;
        }
        draw() {
            Abschlussaufgabe_Rodelhang.crc.beginPath();
            Abschlussaufgabe_Rodelhang.crc.arc(this.xP, this.yP, this.radius, 0, 2 * Math.PI, false);
            Abschlussaufgabe_Rodelhang.crc.fillStyle = "#FFFFFF";
            Abschlussaufgabe_Rodelhang.crc.fill();
            Abschlussaufgabe_Rodelhang.crc.lineWidth = 2;
            Abschlussaufgabe_Rodelhang.crc.strokeStyle = "#000000";
            Abschlussaufgabe_Rodelhang.crc.stroke();
        }
    }
    Abschlussaufgabe_Rodelhang.Snowball = Snowball;
})(Abschlussaufgabe_Rodelhang || (Abschlussaufgabe_Rodelhang = {}));
//# sourceMappingURL=snowball.js.map