/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe_Rodelhang {

    window.addEventListener("load", init);

    export let crc: CanvasRenderingContext2D;

    let objects: DrawObject[] = [];

    let imagedata: ImageData;
    let cloudOne: CloudOne;
    let cloudTwo: CloudTwo;

    let fps: number = 25;
    let i: number = 0;


    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        drawSky();
        drawHillside();
        drawSun();

        generateTrees();
        generateSnow();
        generateClouds();
        generateChild();

        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);

        update();

        function update(): void {
            crc.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);

            //Wolken
            cloudOne.move();
            cloudOne.draw();
            cloudTwo.move();
            cloudTwo.draw();

            for (let i: number = 0; i < objects.length; i++) {
                let object: DrawObject = objects[i];
                object.draw();
                object.move();
            }
        }//update

        function generateTrees(): void {
            for (let i: number = 0; i < 10; i++) {
                let tree: Tree = new Tree();
                objects.push(tree);
            }
        }//generateTrees

        function generateSnow(): void {
            for (let i: number = 0; i < 150; i++) {

                let snowflake: Snow = new Snow();
                objects.push(snowflake);
            }
        }//generateSnow

        function generateClouds(): void {
            cloudOne = new CloudOne();
            cloudTwo = new CloudTwo();
        }//generateClouds


        function generateChild(): void {
            for (let i: number = 0; i < 10; i++) {

                let child: Child = new Child();
                objects.push(child);
            }
        } //generateChild

        function drawSky(): void {
            crc.fillStyle = "#CEF6F5";
            crc.fillRect(0, 0, 500, 700);
            crc.fill();
        } //drawSky

        function drawHillside(): void {
            crc.beginPath();
            crc.moveTo(0, 300);
            crc.lineTo(700, 700);
            crc.lineTo(700, 700);
            crc.lineTo(0, 700);
            crc.lineTo(0, 700);
            crc.closePath();
            crc.fillStyle = "#FFFFFF";
            crc.fill();
        }//drawHillside

        function drawSun(): void {
            crc.beginPath();
            crc.arc(430, 100, 50, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFF00";
            crc.fill();
        }//drawSun
    }//init
}//namespace