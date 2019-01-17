/* Aufgabe: Aufgabe 11
Name: Monetta Marchiano
Matrikel: 256063
Datum: 17.01.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Inheritance_Rodelhang;
(function (Inheritance_Rodelhang) {
    class Snow {
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
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.arc(this.xP, this.yP, 5, 0, 2 * Math.PI);
            Inheritance_Rodelhang.crc.fillStyle = "#FFFFFF";
            Inheritance_Rodelhang.crc.fill();
            Inheritance_Rodelhang.crc.lineWidth = .3;
            Inheritance_Rodelhang.crc.strokeStyle = "#707070";
            Inheritance_Rodelhang.crc.stroke();
        }
    }
    Inheritance_Rodelhang.Snow = Snow;
})(Inheritance_Rodelhang || (Inheritance_Rodelhang = {}));
//# sourceMappingURL=snow.js.map