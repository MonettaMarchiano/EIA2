/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe_Rodelhang {

    export class CloudTwo extends DrawObject {
        xD: number;
        yD: number;

        constructor() {
            super();
            this.xP = 100;
            this.yP = 50;
        }

        move(): void {

            if (this.xP > 500) {
                this.xP = 0;
            }

            this.xP += 6;

            this.draw();
        }

        draw(): void {
            crc.beginPath();
            crc.arc(this.xP, this.yP + 150, 45, 0, 2 * Math.PI);
            crc.arc(this.xP + 40, this.yP + 150, 50, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill();
        }
    }
}