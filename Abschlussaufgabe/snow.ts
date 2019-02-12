/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe_Rodelhang {

    export class Snow extends DrawObject {
        xD: number;
        yD: number;

        constructor() {
            super();
            this.xP = Math.random() * 500;
            this.yP = Math.random() * 700;
        }
        
        move(): void {
            this.yD = 5;
            this.xD = Math.random() * 0;

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.yP > 700) {
                this.yP = 0;
            }
            this.draw();
        }

        draw(): void {
            crc.beginPath();
            crc.arc(this.xP, this.yP, 5, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill();
            crc.lineWidth = .3;
            crc.strokeStyle = "#707070";
            crc.stroke();
        }
    }
}