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
            if (this.xP > 500) {
                this.xP = 0;
            }
            this.xP += 6;
            this.draw();
        }
        draw() {
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.arc(this.xP - 50, this.yP, 45, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.arc(this.xP, this.yP, 50, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.arc(this.xP + 40, this.yP, 40, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.fillStyle = "#FFFFFF";
            Classes_Rodelhang.crc.fill();
        }
    }
    Classes_Rodelhang.CloudOne = CloudOne;
})(Classes_Rodelhang || (Classes_Rodelhang = {}));
//# sourceMappingURL=cloudOne.js.map