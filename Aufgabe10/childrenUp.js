/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Classes_Rodelhang;
(function (Classes_Rodelhang) {
    class ChildrenUp {
        move() {
            if (this.x > 700) {
                this.x = Math.random() * 200 - 300;
                this.y = Math.random() * 300 - 200;
            }
        } // close move
        draw() {
            //Kind3
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.fillStyle = "#000000";
            Classes_Rodelhang.crc.arc(this.x - 20, this.y - 5, 6, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.fill();
            Classes_Rodelhang.crc.stroke();
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.fillStyle = this.colorBody;
            Classes_Rodelhang.crc.fillRect(this.x - 25, this.y + 2, 10, 20);
            Classes_Rodelhang.crc.stroke();
            Classes_Rodelhang.crc.fill();
            //Schlitten
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.moveTo(this.x - 37, this.y + 25);
            Classes_Rodelhang.crc.lineTo(this.x - 10, this.y + 42);
            Classes_Rodelhang.crc.lineTo(this.x - 6, this.y + 43);
            Classes_Rodelhang.crc.lineWidth = 1;
            Classes_Rodelhang.crc.lineCap = "round";
            Classes_Rodelhang.crc.strokeStyle = "#000000";
            Classes_Rodelhang.crc.stroke();
            Classes_Rodelhang.crc.fill();
            console.log("kind3");
        }
    }
    Classes_Rodelhang.ChildrenUp = ChildrenUp;
})(Classes_Rodelhang || (Classes_Rodelhang = {}));
//# sourceMappingURL=childrenUp.js.map