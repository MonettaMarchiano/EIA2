/* Aufgabe: Abschlussaufgabe
Name: Monetta Marchiano
Matrikel: 256063
Datum: 11.02.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Abschlussaufgabe_Rodelhang;
(function (Abschlussaufgabe_Rodelhang) {
    window.addEventListener("load", init);
    let objects = [];
    let snowball;
    let imagedata;
    let cloudOne;
    let cloudTwo;
    let fps = 25;
    let score = 0;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe_Rodelhang.crc = canvas.getContext("2d");
        canvas.addEventListener("touchstart", throwSnowball);
        drawSky();
        drawHillside();
        drawSun();
        generateTrees();
        generateSnow();
        generateClouds();
        generateChild();
        imagedata = Abschlussaufgabe_Rodelhang.crc.getImageData(0, 0, canvas.width, canvas.height);
        update();
    }
    function hitChild() {
        if (snowball.radius <= 5) {
            for (let i = 0; i < objects.length; i++) {
                if (objects[i] instanceof Abschlussaufgabe_Rodelhang.Child) {
                    if (childHit(i)) {
                        objects[i].childGone = true;
                        score += 50;
                        console.log(score);
                        break;
                    }
                }
            }
            snowball = null;
            for (let i = 0; i < objects.length; i++) {
                if (objects[i] instanceof Abschlussaufgabe_Rodelhang.Snowball) {
                    objects.splice(i, 1);
                }
            }
        }
    }
    function childHit(_i) {
        if (snowball.xP >= objects[_i].xP && snowball.xP <= objects[_i].xP + 100) {
            if (snowball.yP <= objects[_i].yP && snowball.yP >= objects[_i].yP - 140) {
                console.log("kind getroffen");
                return true;
            }
        }
    }
    function throwSnowball(_event) {
        console.log(_event.touches[0].clientX, _event.touches[0].clientY);
        if (!snowball) {
            snowball = new Abschlussaufgabe_Rodelhang.Snowball();
            snowball.xP = _event.touches[0].pageX;
            snowball.yP = _event.touches[0].pageY;
            console.log(snowball.xP, snowball.yP);
            objects.push(snowball);
            console.log("1");
        }
    }
    function update() {
        Abschlussaufgabe_Rodelhang.crc.putImageData(imagedata, 0, 0);
        window.setTimeout(update, 1000 / fps);
        Abschlussaufgabe_Rodelhang.crc.font = "25px Verdana";
        Abschlussaufgabe_Rodelhang.crc.fillText("Score" + " " + score, 50, 50);
        if (snowball) {
            hitChild();
        }
        //Wolken
        cloudOne.move();
        cloudOne.draw();
        cloudTwo.move();
        cloudTwo.draw();
        for (let i = 0; i < objects.length; i++) {
            let object = objects[i];
            object.draw();
            object.move();
        }
    } //update
    function generateTrees() {
        for (let i = 0; i < 10; i++) {
            let tree = new Abschlussaufgabe_Rodelhang.Tree();
            objects.push(tree);
        }
    } //generateTrees
    function generateSnow() {
        for (let i = 0; i < 150; i++) {
            let snowflake = new Abschlussaufgabe_Rodelhang.Snow();
            objects.push(snowflake);
        }
    } //generateSnow
    function generateClouds() {
        cloudOne = new Abschlussaufgabe_Rodelhang.CloudOne();
        cloudTwo = new Abschlussaufgabe_Rodelhang.CloudTwo();
    } //generateClouds
    function generateChild() {
        for (let i = 0; i < 50; i++) {
            let child = new Abschlussaufgabe_Rodelhang.Child();
            objects.push(child);
        }
    } //generateChild
    function drawSky() {
        Abschlussaufgabe_Rodelhang.crc.fillStyle = "#CEF6F5";
        Abschlussaufgabe_Rodelhang.crc.fillRect(0, 0, 500, 700);
        Abschlussaufgabe_Rodelhang.crc.fill();
    } //drawSky
    function drawHillside() {
        Abschlussaufgabe_Rodelhang.crc.beginPath();
        Abschlussaufgabe_Rodelhang.crc.moveTo(0, 300);
        Abschlussaufgabe_Rodelhang.crc.lineTo(700, 700);
        Abschlussaufgabe_Rodelhang.crc.lineTo(700, 700);
        Abschlussaufgabe_Rodelhang.crc.lineTo(0, 700);
        Abschlussaufgabe_Rodelhang.crc.lineTo(0, 700);
        Abschlussaufgabe_Rodelhang.crc.closePath();
        Abschlussaufgabe_Rodelhang.crc.fillStyle = "#FFFFFF";
        Abschlussaufgabe_Rodelhang.crc.fill();
    } //drawHillside
    function drawSun() {
        Abschlussaufgabe_Rodelhang.crc.beginPath();
        Abschlussaufgabe_Rodelhang.crc.arc(430, 100, 50, 0, 2 * Math.PI);
        Abschlussaufgabe_Rodelhang.crc.fillStyle = "#FFFF00";
        Abschlussaufgabe_Rodelhang.crc.fill();
    } //drawSun
})(Abschlussaufgabe_Rodelhang || (Abschlussaufgabe_Rodelhang = {})); //namespace
//# sourceMappingURL=main.js.map