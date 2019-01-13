/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Classes_Rodelhang;
(function (Classes_Rodelhang) {
    class CloudOne {
        move() {
            if (this.x > 500) {
                this.x = 0;
            }
            this.x += 6;
            this.draw();
        }
        draw() {
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.arc(this.x + 70, this.y + 100, 45, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.arc(this.x + 120, this.y + 100, 50, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.arc(this.x + 160, this.y + 100, 40, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.fillStyle = "#FFFFFF";
            Classes_Rodelhang.crc.fill();
        }
    }
    Classes_Rodelhang.CloudOne = CloudOne;
})(Classes_Rodelhang || (Classes_Rodelhang = {}));
//# sourceMappingURL=cloudOne.js.map