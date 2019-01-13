/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Classes_Rodelhang {

    export class CloudOne {
        x: number;
        y: number;
        

        move(): void {

            if (this.x > 500) {
                this.x = 0;
            }

            this.x += 6;

            this.draw();

        }

        draw(): void {
            crc.beginPath();
            crc.arc(this.x + 70, this.y + 100, 45, 0, 2 * Math.PI);
            crc.arc(this.x + 120, this.y + 100, 50, 0, 2 * Math.PI);
            crc.arc(this.x + 160, this.y + 100, 40, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill();

           
        }

    }

}