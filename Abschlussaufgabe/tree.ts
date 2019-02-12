/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe_Rodelhang {

    export class Tree extends DrawObject {
        color: string;

        constructor() {
            super();
            this.xP = 40 + Math.random() * 200;
            this.yP = 450 + Math.random() * 150;
            this.color = "#0B6138";
        }

        draw(): void {
            crc.fillStyle = "#886A08";
            crc.fillRect(this.xP - 8, this.yP + 60, 12, 15);
            crc.beginPath();
            crc.moveTo(this.xP, this.yP);
            crc.lineTo(this.xP + 30, this.yP + 60);
            crc.lineTo(this.xP - 30, this.yP + 60);
            crc.closePath();
            crc.fillStyle = this.color;
            crc.fill();
        }
    }
}