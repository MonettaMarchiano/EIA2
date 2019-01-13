/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Classes_Rodelhang {


    export class ChildrenDown {
        xP: number;
        yP: number;
        xD: number;
        yD: number;
        colorHead: string;
        colorBody: string;


        move(): void {



            this.yD = 3;
            this.xD = 6;

            this.xP += this.xD;
            this.yP += this.yD;


            if (this.xP > 700) {
                this.xP = -60;
                this.yP = Math.random() * 300 + 200;

            }
            this.draw();
        } // close move


        draw(): void {
            crc.beginPath();
            crc.fillStyle = "#000000";
            crc.arc(this.xP - 20, this.yP - 5, 6, 0, 2 * Math.PI);
            crc.fill();
            crc.beginPath();
            crc.fillStyle = this.colorBody;
            crc.fillRect(this.xP - 25, this.yP + 2, 10, 20);
            crc.stroke();
            crc.fill();
            console.log("kind3");

            //Schlitten
            crc.beginPath();
            crc.moveTo(this.xP - 37, this.yP + 25);
            crc.lineTo(this.xP - 10, this.yP + 42);
            crc.lineTo(this.xP - 6, this.yP + 43);
            crc.lineWidth = 1;
            crc.lineCap = "round";
            crc.strokeStyle = "#000000";
            crc.stroke();
            crc.fill();
        }
    }
}