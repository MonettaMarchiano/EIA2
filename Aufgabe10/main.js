/* Aufgabe: Aufgabe 10
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Classes_Rodelhang;
(function (Classes_Rodelhang) {
    window.addEventListener("load", init);
    let snowflakes = [];
    let cloudOne = [];
    let cloudTwo = [];
    let childrenUp = [];
    let childrenDown = [];
    let imagedata;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Classes_Rodelhang.crc = canvas.getContext("2d");
        drawSky();
        drawHillside();
        drawSun();
        imagedata = Classes_Rodelhang.crc.getImageData(0, 0, canvas.width, canvas.height);
        //drawCloud1();
        //drawCloud2();
        //drawChildren();
        //        drawSleight();
        //Bäume
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
        //Schneeflocken
        for (let i = 0; i <= 200; i++) {
            let snowflake = new Classes_Rodelhang.Snow();
            snowflake.x = Math.random() * 500;
            snowflake.y = Math.random() * 700;
            snowflake.draw();
        }
        //Wolken
        let cloudOne = new Classes_Rodelhang.CloudOne();
        cloudOne.x = 50;
        cloudOne.y = 100;
        cloudOne.draw();
        console.log("cloud1");
        let cloudTwo = new Classes_Rodelhang.CloudTwo();
        cloudTwo.x = 100;
        cloudTwo.y = 50;
        cloudTwo.draw();
        console.log("cloud2");
        //Kinder
        for (let i = 0; i <= 5; i++) {
            let childrenUp = new Classes_Rodelhang.ChildrenUp();
            console.log(Classes_Rodelhang.crc);
            childrenUp.x = Math.random() * 75 + 400;
            childrenUp.y = Math.random() * 3 + 650;
            childrenUp.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            childrenUp.draw();
            console.log("childrenUp");
        }
        for (let i = 0; i <= 5; i++) {
            let childrenDown = new Classes_Rodelhang.ChildrenDown;
            childrenDown.x = Math.random() * 75 + 100;
            childrenDown.y = Math.random() * 75 + 400;
            childrenDown.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            childrenDown.draw();
            console.log("childrenDown");
        }
    }
    function drawSky() {
        Classes_Rodelhang.crc.fillStyle = "#CEF6F5";
        Classes_Rodelhang.crc.fillRect(0, 0, 500, 700);
        Classes_Rodelhang.crc.fill();
    }
    function drawHillside() {
        Classes_Rodelhang.crc.beginPath();
        Classes_Rodelhang.crc.moveTo(0, 300);
        Classes_Rodelhang.crc.lineTo(500, 700);
        Classes_Rodelhang.crc.lineTo(500, 700);
        Classes_Rodelhang.crc.lineTo(0, 700);
        Classes_Rodelhang.crc.lineTo(0, 300);
        Classes_Rodelhang.crc.closePath();
        Classes_Rodelhang.crc.fillStyle = "#FFFFFF";
        Classes_Rodelhang.crc.fill();
    }
    function drawSun() {
        Classes_Rodelhang.crc.beginPath();
        Classes_Rodelhang.crc.arc(430, 100, 50, 0, 2 * Math.PI);
        Classes_Rodelhang.crc.fillStyle = "#FFFF00";
        Classes_Rodelhang.crc.fill();
    }
    //    function drawCloud1(): void {
    //
    //        crc.beginPath();
    //        crc.arc(70, 100, 45, 0, 2 * Math.PI);
    //        crc.arc(120, 100, 50, 0, 2 * Math.PI);
    //        crc.arc(160, 100, 40, 0, 2 * Math.PI);
    //        crc.fillStyle = "#FFFFFF";
    //        crc.fill();
    //    }
    //
    //    function drawCloud2(): void {
    //
    //        crc.beginPath();
    //        crc.arc(250, 150, 45, 0, 2 * Math.PI);
    //        crc.arc(290, 150, 50, 0, 2 * Math.PI);
    //        crc.fillStyle = "#FFFFFF";
    //        crc.fill();
    //    }
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
    }
    //    function drawSnow(_x: number, _y: number): void {
    //
    //        crc.beginPath();
    //        crc.arc(_x, _y, 5, 0, 2 * Math.PI);
    //        crc.fillStyle = "#FFFFFF";
    //        crc.fill();
    //        crc.lineWidth = .3;
    //        crc.strokeStyle = "#707070";
    //        crc.stroke();   
    //    }
    function drawChildren() {
        //        //Kind1
        //        crc.beginPath();
        //        crc.fillStyle = "#E2A9F3";
        //        crc.fillRect(410, 650, 10, 20);
        //        crc.fill();
        //        crc.beginPath();
        //        crc.fillStyle = "#000000";
        //        crc.arc(415, 645, 6, 0, 2 * Math.PI);
        //        crc.fill();
        //        console.log("Kind1");
        //        //Kind2
        //        crc.beginPath();
        //        crc.fillStyle = "#81F7BE";
        //        crc.fillRect(400, 650, 10, 20);
        //        crc.fill();
        //        crc.beginPath();
        //        crc.fillStyle = "#000000";
        //        crc.arc(405, 645, 6, 0, 2 * Math.PI);
        //        crc.fill();
        //        console.log("Kind2");
        //
        //Kind3
        //        crc.beginPath();
        //        crc.fillStyle = "#F7BE81";
        //        crc.fillRect(390, 650, 10, 20);
        //        crc.fill();
        //        crc.beginPath();
        //        crc.fillStyle = "#000000";
        //        crc.arc(395, 645, 6, 0, 2 * Math.PI);
        //        crc.fill();
        //        console.log("kind3");
        //        //Schlitten1
        //        crc.beginPath();
        //        //console.log("obere Linie");
        //        crc.moveTo(65, 435);
        //        crc.lineTo(85, 448);
        //        //console.log("rechter Strich");
        //        crc.moveTo(80, 455);
        //        crc.lineTo(80, 444);
        //        //console.log("linker Strich");
        //        crc.moveTo(72, 450);
        //        crc.lineTo(72, 440);
        //        //console.log("unterer Strich");
        //        crc.moveTo(65, 447);
        //        crc.lineTo(85, 460);
        //        crc.closePath();
        //        crc.fillStyle = "#000000";
        //        crc.strokeStyle = "#000000";
        //        crc.stroke();
        //        crc.fill();
        //        //
        //        //Kind4 
        //        crc.beginPath();
        //        crc.fillStyle = "#A9A9F5";
        //        crc.fillRect(70, 420, 10, 20);
        //        crc.fill();
        //        crc.beginPath();
        //        crc.fillStyle = "#000000";
        //        crc.arc(75, 415, 6, 0, 2 * Math.PI);
        //        crc.fill();
        //        console.log("kind4");
        //        //Schlitten1
        //        crc.beginPath();
        //        //console.log("obere Linie");
        //        crc.moveTo(65, 435);
        //        crc.lineTo(85, 448);
        //        //console.log("rechter Strich");
        //        crc.moveTo(80, 455);
        //        crc.lineTo(80, 444);
        //        //console.log("linker Strich");
        //        crc.moveTo(72, 450);
        //        crc.lineTo(72, 440);
        //        //console.log("unterer Strich");
        //        crc.moveTo(65, 447);
        //        crc.lineTo(85, 460);
        //        crc.closePath();
        //        crc.fillStyle = "#000000";
        //        crc.strokeStyle = "#000000";
        //        crc.stroke();
        //        crc.fill();
    }
})(Classes_Rodelhang || (Classes_Rodelhang = {}));
//# sourceMappingURL=main.js.map