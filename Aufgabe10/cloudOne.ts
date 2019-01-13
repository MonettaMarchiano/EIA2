/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Classes_Rodelhang {

    export class CloudOne {
        xP: number;
        yP: number;
        xD: number;
        yD: number;
        

        move(): void {

            if (this.xP > 500) {
                this.xP = 0;
            }

            this.xP += 6;

            this.draw();

        }

        draw(): void {
            crc.beginPath();
            crc.arc(this.xP + 70, this.yP + 100, 45, 0, 2 * Math.PI);
            crc.arc(this.xP + 120, this.yP + 100, 50, 0, 2 * Math.PI);
            crc.arc(this.xP + 160, this.yP + 100, 40, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill();

           
        }

    }

}