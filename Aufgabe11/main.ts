/* Aufgabe: Aufgabe 11
Name: Monetta Marchiano
Matrikel: 256063
Datum: 17.01.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Inheritance_Rodelhang {

    window.addEventListener("load", init);

    export let crc: CanvasRenderingContext2D;

    let imagedata: ImageData;

    let objects: DrawObject[] = [];

    //fliegen nachher raus

    //    let children: Child[] = [];
    //    let snowflakes: Snow[] = [];
    //    let childrenUp: ChildrenUp[] = [];
    //    let childrenDown: ChildrenDown[] = [];
    //    let trees: Tree[] = [];

    let cloudOne: CloudOne;
    let cloudTwo: CloudTwo;

    let fps: number = 25;

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

            //Schneeflocken    
            for (let i: number = 0; i < objects.length; i++) {
                let snowflake: Snow = objects[i];
                snowflake.move();
                snowflake.draw();
            }//Schneeflocken

            //Wolken
            cloudOne.move();
            cloudOne.draw();
            cloudTwo.move();
            cloudTwo.draw();

            //Kinder
            for (let i: number = 0; i < objects.length; i++) {
                let child: Child = objects[i];
                child.move();
                child.draw();
            }//Kinder

            //Bäume
            for (let i: number = 0; i < objects.length; i++) {
                let tree: Tree = objects[i];
                console.log("tree");
                tree.draw();
            }//Bäume
        } //update

        //Bäume
        function generateTrees(): void {
            for (let i: number = 0; i < 10; i++) {
                let tree: Tree = new Tree();
            }
            for (let i: number = 0; i < 5; i++) {
                let tree: Tree = new Tree();
            }
        } //generateTrees

        function generateSnow(): void {

            for (let i: number = 0; i <= 150; i++) {
                let snowflake: Snow = new Snow();
                objects.push(snowflake);
            }
        }//generateSnow

        function generateClouds(): void {
            cloudOne = new CloudOne();
            cloudTwo = new CloudTwo();
        }//generateClouds


        function generateChild(): void {
            for (let i: number = 0; i <= 10; i++) {
                let child: Child = new Child();
                objects.push(child);
            }
        }//generateChild


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
        } //drawSun


    } //init
}  //namespace
