/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Abschlussaufgabe_Rodelhang;
(function (Abschlussaufgabe_Rodelhang) {
    class Child extends Abschlussaufgabe_Rodelhang.DrawObject {
        constructor() {
            super();
            this.xP = Math.random() * 75 + 100;
            this.yP = Math.random() * 75 + 400;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.childGone = false;
        } //constructor
        move() {
            if (this.md == true)
                this.moveDown();
            else {
                if (this.childGone == true) {
                    this.moveDown();
                }
                else {
                    this.moveUp();
                }
            } //else
        } //if
        moveDown() {
            this.xD = 6;
            this.yD = 3;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP > 400) {
                this.md = false;
            } //if
        } //moveDown
        moveUp() {
            this.xD = Math.random() * (-6);
            this.yD = Math.random() * (-3);
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP < 50) {
                this.md = true;
            } //if
            this.draw();
        } //moveUp
        draw() {
            if (this.childGone == false) {
                Abschlussaufgabe_Rodelhang.crc.beginPath();
                Abschlussaufgabe_Rodelhang.crc.fillStyle = "#000000";
                Abschlussaufgabe_Rodelhang.crc.arc(this.xP - 20, this.yP - 5, 6, 0, 2 * Math.PI);
                Abschlussaufgabe_Rodelhang.crc.fill();
                Abschlussaufgabe_Rodelhang.crc.beginPath();
                Abschlussaufgabe_Rodelhang.crc.fillStyle = this.colorBody;
                Abschlussaufgabe_Rodelhang.crc.fillRect(this.xP - 25, this.yP + 2, 10, 20);
                Abschlussaufgabe_Rodelhang.crc.stroke();
                Abschlussaufgabe_Rodelhang.crc.fill();
            }
            //Schlitten
            Abschlussaufgabe_Rodelhang.crc.beginPath();
            Abschlussaufgabe_Rodelhang.crc.moveTo(this.xP - 37, this.yP + 25);
            Abschlussaufgabe_Rodelhang.crc.lineTo(this.xP - 10, this.yP + 42);
            Abschlussaufgabe_Rodelhang.crc.lineTo(this.xP - 6, this.yP + 43);
            Abschlussaufgabe_Rodelhang.crc.lineWidth = 1;
            Abschlussaufgabe_Rodelhang.crc.lineCap = "round";
            Abschlussaufgabe_Rodelhang.crc.strokeStyle = "#000000";
            Abschlussaufgabe_Rodelhang.crc.stroke();
            Abschlussaufgabe_Rodelhang.crc.fill();
        }
    }
    Abschlussaufgabe_Rodelhang.Child = Child;
})(Abschlussaufgabe_Rodelhang || (Abschlussaufgabe_Rodelhang = {}));
//# sourceMappingURL=child.js.map