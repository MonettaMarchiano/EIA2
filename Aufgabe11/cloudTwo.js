/* Aufgabe: Aufgabe 11
Name: Monetta Marchiano
Matrikel: 256063
Datum: 17.01.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Inheritance_Rodelhang;
(function (Inheritance_Rodelhang) {
    class CloudTwo {
        move() {
            if (this.xP > 500) {
                this.xP = 0;
            }
            this.xP += 6;
            this.draw();
        }
        draw() {
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.arc(this.xP, this.yP + 150, 45, 0, 2 * Math.PI);
            Inheritance_Rodelhang.crc.arc(this.xP + 40, this.yP + 150, 50, 0, 2 * Math.PI);
            Inheritance_Rodelhang.crc.fillStyle = "#FFFFFF";
            Inheritance_Rodelhang.crc.fill();
        }
    }
    Inheritance_Rodelhang.CloudTwo = CloudTwo;
})(Inheritance_Rodelhang || (Inheritance_Rodelhang = {}));
//# sourceMappingURL=cloudTwo.js.map