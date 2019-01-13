/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Classes_Rodelhang {

    window.addEventListener("load", init);

    export let crc: CanvasRenderingContext2D;

    let snowflakes: Snow[] = [];
    let cloudOne: CloudOne[] = [];
    let cloudTwo: CloudTwo[] = [];
    let childrenUp: ChildrenUp[] = [];
    let childrenDown: ChildrenDown[] = [];

    let fps: number = 25;

    let imagedata: ImageData;

    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        drawSky();
        drawHillside();
        drawSun();
        generateTrees();
        generateSnow();
        generateChildrenUp();
        generateChildrenDown();
        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);

        update();

        //init();

        function update(): void {
            crc.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 7500 / fps);


            //Schneeflocken    

            for (let i: number = 0; i < snowflakes.length; i++) {
                let snowflake: Snow = snowflakes[i];
                snowflake.move();
                snowflake.draw();


            }

            //Wolken

            let cloudOne: CloudOne = new CloudOne();
            cloudOne.xP = 50;
            cloudOne.yP = 100;

            cloudOne.move();
            cloudOne.draw();


            console.log("cloud1");

            let cloudTwo: CloudTwo = new CloudTwo();
            cloudTwo.xP = 100;
            cloudTwo.yP = 50;

            cloudTwo.move();
            cloudTwo.draw();

            console.log("cloud2");


            //Kinder
            for (let i: number = 0; i < ChildrenUp.length; i++) {
                let childUp: ChildrenUp = childrenUp[i];
                childUp.move();
                childUp.draw();
            }

            for (let i: number = 0; i < ChildrenDown.length; i++) {
                let childDown: ChildrenDown = childrenDown[i];
                childDown.move();
                childDown.draw();
            }

        } //update();


        //Bäume
        function generateTrees(): void {

            for (let i: number = 0; i < 10; i++) {
                let x: number = 40 + Math.random() * 200;
                let y: number = 450 + Math.random() * 150;
                drawTree(x, y, "#0B6138");
            }

            for (let i: number = 0; i < 5; i++) {
                let x: number = 40 + Math.random() * 200;
                let y: number = 450 + Math.random() * 150;
                drawTree(x, y, "#0B3B2E");
            }
        } //generateTrees();

        function generateSnow(): void {

            for (let i: number = 0; i <= 150; i++) {
                let snowflake: Snow = new Snow();
                snowflake.xP = Math.random() * 500;
                snowflake.yP = Math.random() * 700;

                snowflake.draw();

                snowflakes.push(snowflake);

            }
        }

        function generateChildrenUp(): void {
            for (let i: number = 0; i <= 5; i++) {
                let childUp: ChildrenUp = new ChildrenUp();
                console.log(crc);
                childUp.xP = Math.random() * 75 + 400;
                childUp.yP = Math.random() * 3 + 650;
                childUp.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";

                childUp.draw();

                console.log("childrenUp");

                childrenUp.push(childUp);
            }
        } //generateChildrenUp();

        function generateChildrenDown(): void {
            for (let i: number = 0; i <= 5; i++) {
                let childDown: ChildrenDown = new ChildrenDown;
                childDown.xP = Math.random() * 75 + 100;
                childDown.yP = Math.random() * 75 + 400;
                childDown.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";

                childDown.draw();

                console.log("childrenDown");

                childrenDown.push(childDown);
            }
        } //generateChildrenDown();

        function drawSky(): void {

            crc.fillStyle = "#CEF6F5";
            crc.fillRect(0, 0, 500, 700);
            crc.fill();
        } //drawSky();

        function drawHillside(): void {

            crc.beginPath();
            crc.moveTo(0, 300);
            crc.lineTo(500, 700);
            crc.lineTo(500, 700);
            crc.lineTo(0, 700);
            crc.lineTo(0, 300);
            crc.closePath();
            crc.fillStyle = "#FFFFFF";
            crc.fill();
        }//drawHillside();

        function drawSun(): void {

            crc.beginPath();
            crc.arc(430, 100, 50, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFF00";
            crc.fill();
        } //drawSun();

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
        } //drawTree();

    }

}