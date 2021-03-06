/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe_Rodelhang {

    window.addEventListener("load", init);

    export let crc: CanvasRenderingContext2D;

    export let name: string;
    export let score: number = 0;

    let objects: DrawObject[] = [];
    let snowball: Snowball;
    let imagedata: ImageData;
    let cloudOne: CloudOne;
    let cloudTwo: CloudTwo;

    let fps: number = 25;
    
    function init(): void {
        console.log("init");
        document.getElementById("Endbildschirm").hidden = true;
        let spielstartButton: HTMLElement = document.getElementById("Spielbeginn");
        spielstartButton.addEventListener("click", spielstart);
        console.log(spielstartButton);
    }

    function spielstart(_event: Event): void {
        console.log("spielstart");
        document.getElementById("Startbildschirm").hidden = true;
        document.getElementsByTagName("h1")[0].hidden = true;

        window.setTimeout(spielende, 30000);

        name = document.getElementsByTagName("input")[0].value;
        if (name != "") {

            document.getElementById("Spielbeginn").hidden = true;

            let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
            crc = canvas.getContext("2d");
            canvas.addEventListener("touchstart", throwSnowball);

            drawSky();
            drawHillside();
            drawSun();

            generateTrees();
            generateSnow();
            generateClouds();
            generateChild();

            imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);

            update();
        }
    }

    function hitChild(): void {

        if (snowball.radius <= 5) {

            for (let i: number = 0; i < objects.length; i++) {
                if (objects[i] instanceof Child) {

                    if (childHit(i)) {
                        objects[i].childGone = true;
                        score += 50;
                        console.log(score);

                        break;
                    }
                }
            }

            snowball = null;
            for (let i: number = 0; i < objects.length; i++) {
                if (objects[i] instanceof Snowball) {
                    objects.splice(i, 1);
                }
            }
        }
    }

    function childHit(_i: number): boolean {

        if (snowball.xP >= objects[_i].xP && snowball.xP <= objects[_i].xP + 100) {
            if (snowball.yP <= objects[_i].yP && snowball.yP >= objects[_i].yP - 140) {
                console.log("kind getroffen");
                return true;
            }
        }
    }

    function throwSnowball(_event: TouchEvent): void {

        _event.preventDefault();

        console.log(_event.touches[0].clientX, _event.touches[0].clientY);
        if (!snowball) {
            snowball = new Snowball();

            snowball.xP = _event.touches[0].pageX;
            snowball.yP = _event.touches[0].pageY;
            console.log(snowball.xP, snowball.yP);

            objects.push(snowball);
            console.log("1");
        }
    }

    function spielende(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.hidden = true;
        document.getElementById("Endbildschirm").hidden = false;
        document.getElementsByTagName("h1")[0].hidden = true;
        crc = canvas.getContext("2d");
        DatabaseClient.insert();
        DatabaseClient.getHighscore();       
    }

    function update(): void {
        crc.putImageData(imagedata, 0, 0);
        window.setTimeout(update, 1000 / fps);

        crc.font = "25px Verdana";
        crc.fillText("Score" + " " + score, 50, 50);

        if (snowball) {
            hitChild();
        }
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
        for (let i: number = 0; i < 50; i++) {

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
}//namespace