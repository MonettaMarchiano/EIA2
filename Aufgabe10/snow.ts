/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Classes_Rodelhang {

    export class Snow {
        x: number;
        y: number;


        move(): void {

        if (this.y > 700) {
           this.y = 0;
        }

        this.y += 15 + Math.round(Math.random() * 6);
        
        this.draw();
        }   
        
        draw(): void {
        crc.beginPath();
        crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
        crc.lineWidth = .3;
        crc.strokeStyle = "#707070";
        crc.stroke();     
        
        }

      }
}