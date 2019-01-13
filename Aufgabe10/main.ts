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
        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);
        animateTrees();
        animateSnow();
        animateClouds();
        animateChildrenUp();
        animateChildrenDown();

        //drawCloud1();
        //drawCloud2();
        //drawChildren();
        //drawSleight();

        update();

    }

    function update(): void {
        crc.putImageData(imageData, 0, 0);
        window.setTimeout(update, 1000 / fps);



        //Bäume
        function animateTrees(): void {
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
        } //animateTrees();

        //Schneeflocken    
        function animateSnow(): void {

            for (let i: number = 0; i <= 200; i++) {
                let snowflake: Snow = new Snow();
                snowflake.x = Math.random() * 500;
                snowflake.y = Math.random() * 700;

                snowflake.draw();

                snowflakes.push(snowflake);
            }
        }//animateSnow();

        //Wolken
        function animateClouds(): void {
            let cloudOne: CloudOne = new CloudOne();
            cloudOne.x = 50;
            cloudOne.y = 100;
            cloudOne.draw();
            console.log("cloud1");

            let cloudTwo: CloudTwo = new CloudTwo();
            cloudTwo.x = 100;
            cloudTwo.y = 50;
            cloudTwo.draw();
            console.log("cloud2");
        } //animateClouds();

        //Kinder
        function animateChildrenUp(): void {

            for (let i: number = 0; i <= 5; i++) {
                let childrenUp: ChildrenUp = new ChildrenUp();
                console.log(crc);
                childrenUp.x = Math.random() * 75 + 400;
                childrenUp.y = Math.random() * 3 + 650;
                childrenUp.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                childrenUp.draw();
                console.log("childrenUp");

                childrenUp.push(childrenUp);
            }
        } //animateChildrenUp();

        function animateChildrenDown(): void {

            for (let i: number = 0; i <= 5; i++) {
                let childrenDown: ChildrenDown = new ChildrenDown;
                childrenDown.x = Math.random() * 75 + 100;
                childrenDown.y = Math.random() * 75 + 400;
                childrenDown.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                childrenDown.draw();
                console.log("childrenDown");

                childrenUp.push(childrenDown);
            }

        } //animateChildrenDown();
    } //update();

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

    //        function drawChildren(): void {
    //     }
   
} //init
} //namespace
