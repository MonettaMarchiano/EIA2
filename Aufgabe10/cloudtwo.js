/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Classes_Rodelhang;
(function (Classes_Rodelhang) {
    class CloudTwo {
        move() {
            if (this.x > 500) {
                this.x = 0;
            }
            this.x += 6;
            this.draw();
        }
        draw() {
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.arc(this.x + 250, this.y + 150, 45, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.arc(this.x + 290, this.y + 150, 50, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.fillStyle = "#FFFFFF";
            Classes_Rodelhang.crc.fill();
        }
    }
    Classes_Rodelhang.CloudTwo = CloudTwo;
})(Classes_Rodelhang || (Classes_Rodelhang = {}));
//# sourceMappingURL=cloudtwo.js.map