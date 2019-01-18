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
    let children: Child[] = [];
    let snowflakes: Snow[] = [];
    let childrenUp: ChildrenUp[] = [];
    let childrenDown: ChildrenDown[] = [];

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
        //        generateChildrenUp();
        //        generateChildrenDown();

        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);

        update();

        function update(): void {
            crc.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);

            //Schneeflocken    
            for (let i: number = 0; i < snowflakes.length; i++) {
                let snowflake: Snow = snowflakes[i];
                snowflake.move();
                snowflake.draw();
            }//Schneeflocken

            //Wolken
            cloudOne.move();
            cloudOne.draw();

            cloudTwo.move();
            cloudTwo.draw();

            //Kinder
            for (let i: number = 0; i < children.length; i++) {
                let child: Child = children[i];

                child.move();
                child.draw();
            }//Kinder

            //            for (let i: number = 0; i < childrenDown.length; i++) {
            //                let childDown: ChildrenDown = childrenDown[i];
            //
            //                childDown.move();
            //                childDown.draw();
            //            }
        } //update

        //Bäume
        function generateTrees(): void {

            for (let i: number = 0; i < 10; i++) {
            }

            for (let i: number = 0; i < 5; i++) {
            }
        } //generateTrees

        function generateSnow(): void {

            for (let i: number = 0; i <= 150; i++) {
                let snowflake: Snow = new Snow();
                //                snowflake.xP = Math.random() * 500;
                //                snowflake.yP = Math.random() * 700;

                snowflakes.push(snowflake);
            }
        }//generateSnow

        function generateClouds(): void {
            cloudOne = new CloudOne();
            //            cloudOne.xP = 50;
            //            cloudOne.yP = 100;

            cloudTwo = new CloudTwo();
            //            cloudTwo.xP = 100;
            //            cloudTwo.yP = 50;
        }//generateClouds


        function generateChild(): void {
            for (let i: number = 0; i <= 10; i++) {
                let child: Child = new Child();

                children.push(child);

            }
        }//generateChild

        //            function generateChildrenUp(): void {
        //                for (let i: number = 0; i <= 4; i++) {
        //                    let childUp: ChildrenUp = new ChildrenUp();
        //                    console.log(crc);
        //                    //                childUp.xP = Math.random() * 75 + 400;
        //                    //                childUp.yP = Math.random() * 3 + 650;
        //                    //                childUp.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        //
        //                    childrenUp.push(childUp);
        //                }
        //            } //generateChildrenUp();
        //
        //            function generateChildrenDown(): void {
        //                for (let i: number = 0; i <= 4; i++) {
        //                    let childDown: ChildrenDown = new ChildrenDown;
        //                    //                childDown.xP = Math.random() * 75 + 100;
        //                    //                childDown.yP = Math.random() * 75 + 400;
        //                    //                childDown.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        //
        //                    childrenDown.push(childDown);
        //                }
        //            } //generateChildrenDown();

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
        } //drawTree
    } //init
}  //namespace