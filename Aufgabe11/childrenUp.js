/* Aufgabe: Aufgabe 11
Name: Monetta Marchiano
Matrikel: 256063
Datum: 17.01.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Inheritance_Rodelhang;
(function (Inheritance_Rodelhang) {
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
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.fillStyle = "#000000";
            Inheritance_Rodelhang.crc.arc(this.xP - 20, this.yP - 5, 6, 0, 2 * Math.PI);
            Inheritance_Rodelhang.crc.fill();
            Inheritance_Rodelhang.crc.stroke();
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.fillStyle = this.colorBody;
            Inheritance_Rodelhang.crc.fillRect(this.xP - 25, this.yP + 2, 10, 20);
            Inheritance_Rodelhang.crc.stroke();
            Inheritance_Rodelhang.crc.fill();
            //Schlitten
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.moveTo(this.xP - 37, this.yP + 25);
            Inheritance_Rodelhang.crc.lineTo(this.xP - 10, this.yP + 42);
            Inheritance_Rodelhang.crc.lineTo(this.xP - 6, this.yP + 43);
            Inheritance_Rodelhang.crc.lineWidth = 1;
            Inheritance_Rodelhang.crc.lineCap = "round";
            Inheritance_Rodelhang.crc.strokeStyle = "#000000";
            Inheritance_Rodelhang.crc.stroke();
            Inheritance_Rodelhang.crc.fill();
        }
    }
    Inheritance_Rodelhang.ChildrenUp = ChildrenUp;
})(Inheritance_Rodelhang || (Inheritance_Rodelhang = {}));
//# sourceMappingURL=childrenUp.js.map