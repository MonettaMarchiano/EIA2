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
            this.xD = Math.random() * (-6);
            this.yD = Math.random() * (-3);
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP < 0) {
                this.yP = Math.random() * 500 + 500;
                this.xP = 500;
            }
            this.draw();
        } //  move();
        draw() {
            //Kind3
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.fillStyle = "#000000";
            Classes_Rodelhang.crc.arc(this.xP - 20, this.yP - 5, 6, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.fill();
            Classes_Rodelhang.crc.stroke();
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.fillStyle = this.colorBody;
            Classes_Rodelhang.crc.fillRect(this.xP - 25, this.yP + 2, 10, 20);
            Classes_Rodelhang.crc.stroke();
            Classes_Rodelhang.crc.fill();
            //Schlitten
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.moveTo(this.xP - 37, this.yP + 25);
            Classes_Rodelhang.crc.lineTo(this.xP - 10, this.yP + 42);
            Classes_Rodelhang.crc.lineTo(this.xP - 6, this.yP + 43);
            Classes_Rodelhang.crc.lineWidth = 1;
            Classes_Rodelhang.crc.lineCap = "round";
            Classes_Rodelhang.crc.strokeStyle = "#000000";
            Classes_Rodelhang.crc.stroke();
            Classes_Rodelhang.crc.fill();
        }
    }
    Classes_Rodelhang.ChildrenUp = ChildrenUp;
})(Classes_Rodelhang || (Classes_Rodelhang = {}));
//# sourceMappingURL=childrenUp.js.map