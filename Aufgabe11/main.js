/* Aufgabe: Aufgabe 11
Name: Monetta Marchiano
Matrikel: 256063
Datum: 17.01.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Inheritance_Rodelhang;
(function (Inheritance_Rodelhang) {
    window.addEventListener("load", init);
    let imagedata;
    let snowflakes = [];
    let cloudOne;
    let cloudTwo;
    let childrenUp = [];
    let childrenDown = [];
    let fps = 25;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Inheritance_Rodelhang.crc = canvas.getContext("2d");
        drawSky();
        drawHillside();
        drawSun();
        generateTrees();
        generateSnow();
        generateClouds();
        generateChildrenUp();
        generateChildrenDown();
        imagedata = Inheritance_Rodelhang.crc.getImageData(0, 0, canvas.width, canvas.height);
        update();
        function update() {
            Inheritance_Rodelhang.crc.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);
            //Schneeflocken    
            for (let i = 0; i < snowflakes.length; i++) {
                let snowflake = snowflakes[i];
                snowflake.move();
                snowflake.draw();
            }
            //Wolken
            cloudOne.move();
            cloudOne.draw();
            cloudTwo.move();
            cloudTwo.draw();
            //Kinder
            for (let i = 0; i < childrenUp.length; i++) {
                let childUp = childrenUp[i];
                childUp.move();
                childUp.draw();
            }
            for (let i = 0; i < childrenDown.length; i++) {
                let childDown = childrenDown[i];
                childDown.move();
                childDown.draw();
            }
        } //update();
        //Bäume
        function generateTrees() {
            for (let i = 0; i < 10; i++) {
                let x = 40 + Math.random() * 200;
                let y = 450 + Math.random() * 150;
                drawTree(x, y, "#0B6138");
            }
            for (let i = 0; i < 5; i++) {
                let x = 40 + Math.random() * 200;
                let y = 450 + Math.random() * 150;
                drawTree(x, y, "#0B3B2E");
            }
        } //generateTrees();
        function generateSnow() {
            for (let i = 0; i <= 150; i++) {
                let snowflake = new Inheritance_Rodelhang.Snow();
                snowflake.xP = Math.random() * 500;
                snowflake.yP = Math.random() * 700;
                // snowflake.draw();
                snowflakes.push(snowflake);
            }
        }
        function generateClouds() {
            cloudOne = new Inheritance_Rodelhang.CloudOne();
            cloudOne.xP = 50;
            cloudOne.yP = 100;
            cloudTwo = new Inheritance_Rodelhang.CloudTwo();
            cloudTwo.xP = 100;
            cloudTwo.yP = 50;
        }
        function generateChildrenUp() {
            for (let i = 0; i <= 4; i++) {
                let childUp = new Inheritance_Rodelhang.ChildrenUp();
                console.log(Inheritance_Rodelhang.crc);
                childUp.xP = Math.random() * 75 + 400;
                childUp.yP = Math.random() * 3 + 650;
                childUp.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                childrenUp.push(childUp);
            }
        } //generateChildrenUp();
        function generateChildrenDown() {
            for (let i = 0; i <= 4; i++) {
                let childDown = new Inheritance_Rodelhang.ChildrenDown;
                childDown.xP = Math.random() * 75 + 100;
                childDown.yP = Math.random() * 75 + 400;
                childDown.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                childrenDown.push(childDown);
            }
        } //generateChildrenDown();
        function drawSky() {
            Inheritance_Rodelhang.crc.fillStyle = "#CEF6F5";
            Inheritance_Rodelhang.crc.fillRect(0, 0, 500, 700);
            Inheritance_Rodelhang.crc.fill();
        } //drawSky();
        function drawHillside() {
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.moveTo(0, 300);
            Inheritance_Rodelhang.crc.lineTo(700, 700);
            Inheritance_Rodelhang.crc.lineTo(700, 700);
            Inheritance_Rodelhang.crc.lineTo(0, 700);
            Inheritance_Rodelhang.crc.lineTo(0, 700);
            Inheritance_Rodelhang.crc.closePath();
            Inheritance_Rodelhang.crc.fillStyle = "#FFFFFF";
            Inheritance_Rodelhang.crc.fill();
        } //drawHillside();
        function drawSun() {
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.arc(430, 100, 50, 0, 2 * Math.PI);
            Inheritance_Rodelhang.crc.fillStyle = "#FFFF00";
            Inheritance_Rodelhang.crc.fill();
        } //drawSun();
        function drawTree(_x, _y, _color) {
            Inheritance_Rodelhang.crc.fillStyle = "#886A08";
            Inheritance_Rodelhang.crc.fillRect(_x - 8, _y + 60, 12, 15);
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.moveTo(_x, _y);
            Inheritance_Rodelhang.crc.lineTo(_x + 30, _y + 60);
            Inheritance_Rodelhang.crc.lineTo(_x - 30, _y + 60);
            Inheritance_Rodelhang.crc.closePath();
            Inheritance_Rodelhang.crc.fillStyle = _color;
            Inheritance_Rodelhang.crc.fill();
        } //drawTree();
    }
})(Inheritance_Rodelhang || (Inheritance_Rodelhang = {}));
//# sourceMappingURL=main.js.map