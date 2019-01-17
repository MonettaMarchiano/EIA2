/* Aufgabe: Aufgabe 11
Name: Monetta Marchiano
Matrikel: 256063
Datum: 17.01.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Inheritance_Rodelhang  {

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
            crc.arc(this.xP - 50, this.yP , 45, 0, 2 * Math.PI);
            crc.arc(this.xP, this.yP, 50, 0, 2 * Math.PI);
            crc.arc(this.xP + 40, this.yP, 40, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill();

           
        }

    }

}