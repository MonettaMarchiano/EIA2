/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Classes_Rodelhang {

    export class Snow {
        xP: number;
        yP: number;
        xD: number;
        yD: number;


        move(): void {
            
        this.yD = 2;
        this.xD = Math.random() * 4 - 2; 
            
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