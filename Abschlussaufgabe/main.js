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
    let imagedata;
    let cloudOne;
    let cloudTwo;
    let fps = 25;
    let i = 0;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe_Rodelhang.crc = canvas.getContext("2d");
        drawSky();
        drawHillside();
        drawSun();
        generateTrees();
        generateSnow();
        generateClouds();
        generateChild();
        imagedata = Abschlussaufgabe_Rodelhang.crc.getImageData(0, 0, canvas.width, canvas.height);
        update();
        function update() {
            Abschlussaufgabe_Rodelhang.crc.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);
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
            for (let i = 0; i < 10; i++) {
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
    } //init
})(Abschlussaufgabe_Rodelhang || (Abschlussaufgabe_Rodelhang = {})); //namespace
//# sourceMappingURL=main.js.map