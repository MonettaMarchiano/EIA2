/* Aufgabe: Aufgabe 11
Name: Monetta Marchiano
Matrikel: 256063
Datum: 17.01.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Inheritance_Rodelhang;
(function (Inheritance_Rodelhang) {
    class Tree extends Inheritance_Rodelhang.DrawObject {
        constructor() {
            super();
            this.xP = 40 + Math.random() * 200;
            this.yP = 450 + Math.random() * 150;
            this.color = "#0B6138";
        }
        draw() {
            Inheritance_Rodelhang.crc.fillStyle = "#886A08";
            Inheritance_Rodelhang.crc.fillRect(this.xP - 8, this.yP + 60, 12, 15);
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.moveTo(this.xP, this.yP);
            Inheritance_Rodelhang.crc.lineTo(this.xP + 30, this.yP + 60);
            Inheritance_Rodelhang.crc.lineTo(this.xP - 30, this.yP + 60);
            Inheritance_Rodelhang.crc.closePath();
            Inheritance_Rodelhang.crc.fillStyle = this.color;
            Inheritance_Rodelhang.crc.fill();
            this.draw();
        }
    }
    Inheritance_Rodelhang.Tree = Tree;
})(Inheritance_Rodelhang || (Inheritance_Rodelhang = {}));
//# sourceMappingURL=tree.js.map