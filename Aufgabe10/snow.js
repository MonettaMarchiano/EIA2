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
            if (this.y > 700) {
                this.y = 0;
            }
            this.y += 15 + Math.round(Math.random() * 6);
            this.draw();
        }
        draw() {
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
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