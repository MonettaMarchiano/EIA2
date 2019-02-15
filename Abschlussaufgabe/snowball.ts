/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe_Rodelhang {

    export class Snowball extends DrawObject {

        radius: number;

        constructor() {
            super();
            this.radius = 25;
        }

        move(): void {

            this.radius -= 5;
        }

        draw(): void {

            crc.beginPath();
            crc.arc(this.xP, this.yP, this.radius, 0, 2 * Math.PI, false);

            crc.fillStyle = "#FFFFFF";
            crc.fill();
            crc.lineWidth = 2;
            crc.strokeStyle = "#000000";
            crc.stroke();
        }
    }
}