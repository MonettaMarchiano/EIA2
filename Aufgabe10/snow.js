/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Classes_Rodelhang;
(function (Classes_Rodelhang) {
    class Snow {
        move() {
            this.yD = 2;
            this.xD = Math.random() * 4 - 2;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.yP > 700) {
                this.yP = 0;
            }
            this.draw();
        }
        draw() {
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.arc(this.xP, this.yP, 5, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.fillStyle = "#FFFFFF";
            Classes_Rodelhang.crc.fill();
            Classes_Rodelhang.crc.lineWidth = .3;
            Classes_Rodelhang.crc.strokeStyle = "#707070";
            Classes_Rodelhang.crc.stroke();
        }
    }
    Classes_Rodelhang.Snow = Snow;
})(Classes_Rodelhang || (Classes_Rodelhang = {}));
//# sourceMappingURL=snow.js.map