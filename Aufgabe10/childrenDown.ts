/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Classes_Rodelhang {


    export class ChildrenDown {
        x: number;
        y: number;
        colorHead: string;
        colorBody: string;

        move(): void {

            if (this.x > 700) {
                this.x = Math.random() * 200 - 300;
                this.y = Math.random() * 300 - 200;

            }
        } // close move
        
        draw(): void {
            crc.beginPath();
            crc.fillStyle = "#000000";
            crc.arc(this.x - 20 , this.y - 5, 6, 0, 2 * Math.PI);
            crc.fill();
            crc.beginPath();
            crc.fillStyle = this.colorBody;
            crc.fillRect(this.x - 25, this.y + 2, 10, 20);
            crc.stroke();
            crc.fill();
            console.log("kind3");
            
            //Schlitten
            crc.beginPath();
            crc.moveTo(this.x - 37, this.y + 25);
            crc.lineTo(this.x - 10, this.y + 42);
            crc.lineTo(this.x - 6, this.y + 43);
            crc.lineWidth = 1;
            crc.lineCap = "round";
            crc.strokeStyle = "#000000";
            crc.stroke();
            crc.fill();
        }
    }
}