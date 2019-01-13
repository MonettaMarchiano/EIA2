/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Classes_Rodelhang;
(function (Classes_Rodelhang) {
    window.addEventListener("load", init);
    let imagedata;
    let snowflakes = [];
    let cloudOne = [];
    let cloudTwo = [];
    let childrenUp = [];
    let childrenDown = [];
    let fps = 25;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Classes_Rodelhang.crc = canvas.getContext("2d");
        imagedata = Classes_Rodelhang.crc.getImageData(0, 0, canvas.width, canvas.height);
        drawSky();
        drawHillside();
        drawSun();
        generateTrees();
        generateSnow();
        generateChildrenUp();
        generateChildrenDown();
        imagedata = Classes_Rodelhang.crc.getImageData(0, 0, canvas.width, canvas.height);
        update();
        //init();
        function update() {
            Classes_Rodelhang.crc.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);
            //Schneeflocken    
            for (let i = 0; i < snowflakes.length; i++) {
                let snowflake = snowflakes[i];
                snowflake.move();
                snowflake.draw();
            }
            //Wolken
            let cloudOne = new Classes_Rodelhang.CloudOne();
            cloudOne.xP = 50;
            cloudOne.yP = 100;
            cloudOne.move();
            cloudOne.draw();
            console.log("cloud1");
            let cloudTwo = new Classes_Rodelhang.CloudTwo();
            cloudTwo.xP = 100;
            cloudTwo.yP = 50;
            cloudTwo.move();
            cloudTwo.draw();
            console.log("cloud2");
            //Kinder
            for (let i = 0; i < childrenUp.length; i++) {
                let childUp = childrenUp[i];
                childUp.move();
                console.log("childUp.move();");
                childUp.draw();
            }
            for (let i = 0; i < childrenDown.length; i++) {
                let childDown = childrenDown[i];
                childDown.move();
                console.log("childDown.move();");
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
                let snowflake = new Classes_Rodelhang.Snow();
                snowflake.xP = Math.random() * 500;
                snowflake.yP = Math.random() * 700;
                snowflake.draw();
                snowflakes.push(snowflake);
            }
        }
        function generateChildrenUp() {
            for (let i = 0; i <= 4; i++) {
                let childUp = new Classes_Rodelhang.ChildrenUp();
                console.log(Classes_Rodelhang.crc);
                childUp.xP = Math.random() * 75 + 400;
                childUp.yP = Math.random() * 3 + 650;
                childUp.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                childUp.draw();
                console.log("childrenUp");
                childrenUp.push(childUp);
            }
        } //generateChildrenUp();
        function generateChildrenDown() {
            for (let i = 0; i <= 4; i++) {
                let childDown = new Classes_Rodelhang.ChildrenDown;
                childDown.xP = Math.random() * 75 + 100;
                childDown.yP = Math.random() * 75 + 400;
                childDown.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                childDown.draw();
                console.log("childrenDown");
                childrenDown.push(childDown);
            }
        } //generateChildrenDown();
        function drawSky() {
            Classes_Rodelhang.crc.fillStyle = "#CEF6F5";
            Classes_Rodelhang.crc.fillRect(0, 0, 500, 700);
            Classes_Rodelhang.crc.fill();
        } //drawSky();
        function drawHillside() {
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.moveTo(0, 300);
            Classes_Rodelhang.crc.lineTo(700, 700);
            Classes_Rodelhang.crc.lineTo(700, 700);
            Classes_Rodelhang.crc.lineTo(0, 700);
            Classes_Rodelhang.crc.lineTo(0, 700);
            Classes_Rodelhang.crc.closePath();
            Classes_Rodelhang.crc.fillStyle = "#FFFFFF";
            Classes_Rodelhang.crc.fill();
        } //drawHillside();
        function drawSun() {
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.arc(430, 100, 50, 0, 2 * Math.PI);
            Classes_Rodelhang.crc.fillStyle = "#FFFF00";
            Classes_Rodelhang.crc.fill();
        } //drawSun();
        function drawTree(_x, _y, _color) {
            Classes_Rodelhang.crc.fillStyle = "#886A08";
            Classes_Rodelhang.crc.fillRect(_x - 8, _y + 60, 12, 15);
            Classes_Rodelhang.crc.beginPath();
            Classes_Rodelhang.crc.moveTo(_x, _y);
            Classes_Rodelhang.crc.lineTo(_x + 30, _y + 60);
            Classes_Rodelhang.crc.lineTo(_x - 30, _y + 60);
            Classes_Rodelhang.crc.closePath();
            Classes_Rodelhang.crc.fillStyle = _color;
            Classes_Rodelhang.crc.fill();
        } //drawTree();
    }
})(Classes_Rodelhang || (Classes_Rodelhang = {}));
//# sourceMappingURL=main.js.map