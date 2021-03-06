/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe_Rodelhang {

    export class Child extends DrawObject {
        xD: number;
        yD: number;
        colorBody: string;
        md: boolean;

        constructor() {
            super();
            this.xP = Math.random() * 75 + 100;
            this.yP = Math.random() * 75 + 400;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.childGone = false;
        }//constructor

        move(): void {
            if (this.md == true)
                this.moveDown();

            else {

                if (this.childGone == true) {
                    this.moveDown();
                }
                else {
                    this.moveUp();
                }
            }//else
        }//if

        moveDown(): void {
            this.xD = 6;
            this.yD = 3;

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP > 400) {
                this.md = false;
            }//if
        }//moveDown

        moveUp(): void {

            this.xD = Math.random() * (-6);
            this.yD = Math.random() * (-3);

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP < 50) {
                this.md = true;
            }//if
            this.draw();
        }//moveUp

        draw(): void {

            if (this.childGone == false) {

                crc.beginPath();
                crc.fillStyle = "#000000";
                crc.arc(this.xP - 20, this.yP - 5, 6, 0, 2 * Math.PI);
                crc.fill();
                crc.beginPath();
                crc.fillStyle = this.colorBody;
                crc.fillRect(this.xP - 25, this.yP + 2, 10, 20);
                crc.stroke();
                crc.fill();
            }

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