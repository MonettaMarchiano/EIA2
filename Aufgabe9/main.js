/* Aufgabe: Aufgabe 9
Name: Monetta Marchiano
Matrikel: 256063
Datum: 20.12.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Rodelhang;
(function (Rodelhang) {
    window.addEventListener("load", init);
    let crc;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        drawSky();
        drawHillside();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawChildren();
        // drawSleight();
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
            let x = Math.random() * 500;
            let y = Math.random() * 700;
            drawSnow(x, y);
        }
    }
    function drawSky() {
        crc.fillStyle = "#CEF6F5";
        crc.fillRect(0, 0, 500, 700);
        crc.fill();
    }
    function drawHillside() {
        crc.beginPath();
        crc.moveTo(0, 300);
        crc.lineTo(500, 700);
        crc.lineTo(500, 700);
        crc.lineTo(0, 700);
        crc.lineTo(0, 300);
        crc.closePath();
        crc.fillStyle = "#FFFFFF";
        crc.fill();
    }
    function drawSun() {
        crc.beginPath();
        crc.arc(430, 100, 50, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFF00";
        crc.fill();
    }
    function drawCloud1() {
        crc.beginPath();
        crc.arc(70, 100, 45, 0, 2 * Math.PI);
        crc.arc(120, 100, 50, 0, 2 * Math.PI);
        crc.arc(160, 100, 40, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
    }
    function drawCloud2() {
        crc.beginPath();
        crc.arc(250, 150, 45, 0, 2 * Math.PI);
        crc.arc(290, 150, 50, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
    }
    function drawTree(_x, _y, _color) {
        crc.fillStyle = "#886A08";
        crc.fillRect(_x - 8, _y + 60, 12, 15);
        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.lineTo(_x + 30, _y + 60);
        crc.lineTo(_x - 30, _y + 60);
        crc.closePath();
        crc.fillStyle = _color;
        crc.fill();
    }
    function drawSnow(_x, _y) {
        crc.beginPath();
        crc.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
        crc.lineWidth = .3;
        crc.strokeStyle = "#707070";
        crc.stroke();
    }
    function drawChildren() {
        //Kind1
        crc.beginPath();
        crc.fillStyle = "#E2A9F3";
        crc.fillRect(410, 650, 10, 20);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(415, 645, 6, 0, 2 * Math.PI);
        crc.fill();
        //Kind2
        crc.beginPath();
        crc.fillStyle = "#81F7BE";
        crc.fillRect(400, 650, 10, 20);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(405, 645, 6, 0, 2 * Math.PI);
        crc.fill();
        //Kind3
        crc.beginPath();
        crc.fillStyle = "#F7BE81";
        crc.fillRect(390, 650, 10, 20);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(395, 645, 6, 0, 2 * Math.PI);
        crc.fill();
        console.log("kinder");
        //Kind4 
        crc.beginPath();
        crc.fillStyle = "#A9A9F5";
        crc.fillRect(70, 420, 10, 20);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(75, 415, 6, 0, 2 * Math.PI);
        crc.fill();
        console.log("kinder");
    }
})(Rodelhang || (Rodelhang = {}));
//# sourceMappingURL=main.js.map