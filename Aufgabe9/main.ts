/* Aufgabe: Aufgabe 9
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Rodelhang {

    window.addEventListener("load", init);

    let crc: CanvasRenderingContext2D;

    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        drawSky();
        drawHillside();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawChildren();

        // drawSleight();



        //Bäume
        for (let i: number = 0; i < 10; i++) {
            let x: number = 40 + Math.random() * 200;
            let y: number = 500 + Math.random() * 200;
            drawTree(x, y, "#0B6138");
        }

        for (let i: number = 0; i < 5; i++) {
            let x: number = 40 + Math.random() * 200;
            let y: number = 500 + Math.random() * 200;
            drawTree(x, y, "#0B3B2E");
        }

        //Schneeflocken
        for (let i: number = 0; i <= 200; i++) {
            let x: number = Math.random() * 500;
            let y: number = Math.random() * 800;
            drawSnow(x, y);
        }
    }

    function drawSky(): void {

        crc.fillStyle = "#CEF6F5";
        crc.fillRect(0, 0, 500, 800);
        crc.fill();

    }




    function drawHillside(): void {

        crc.beginPath();
        crc.moveTo(0, 300);
        crc.lineTo(500, 700);
        crc.lineTo(500, 800);
        crc.lineTo(0, 800);
        crc.lineTo(0, 300);
        crc.closePath();
        crc.fillStyle = "#FFFFFF";
        crc.fill();

    }

    function drawSun(): void {

        crc.beginPath();
        crc.arc(430, 100, 50, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFF00";
        crc.fill();
    }

    function drawCloud1(): void {

        crc.beginPath();
        crc.arc(70, 100, 45, 0, 2 * Math.PI);
        crc.arc(120, 100, 50, 0, 2 * Math.PI);
        crc.arc(160, 100, 40, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();

    }

    function drawCloud2(): void {

        crc.beginPath();
        crc.arc(250, 150, 45, 0, 2 * Math.PI);
        crc.arc(290, 150, 50, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();

    }

    function drawTree(_x: number, _y: number, _color: string): void {

        crc.fillStyle = "#886A08";
        crc.fillRect(_x - 8, _y + 60, 12, 15);
        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.lineTo(_x + 30, _y + 60);
        crc.lineTo(_x - 30, _y + 60);
        crc.closePath();
        crc.fillStyle = _color;
        crc.fill();

    }

    function drawSnow(_x: number, _y: number): void {

        crc.beginPath();
        crc.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
        crc.lineWidth = .3;
        crc.strokeStyle = "#707070";
        crc.stroke();


    }


    function drawChildren(): void {
        
        crc.beginPath();
        crc.fillStyle = "#E2A9F3";
        crc.fillRect(450, 750, 10, 20);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(450, 25, 20, 0, 2 * Math.PI);
        crc.fill();
       
        console.log("kinder");

}

}