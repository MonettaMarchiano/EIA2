/* Aufgabe: Aufgabe 11
Name: Monetta Marchiano
Matrikel: 256063
Datum: 17.01.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Inheritance_Rodelhang;
(function (Inheritance_Rodelhang) {
    window.addEventListener("load", init);
    let objects = [];
    let imagedata;
    let cloudOne;
    let cloudTwo;
    let fps = 25;
    let i = 0;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Inheritance_Rodelhang.crc = canvas.getContext("2d");
        drawSky();
        drawHillside();
        drawSun();
        generateTrees();
        generateSnow();
        generateClouds();
        generateChild();
        imagedata = Inheritance_Rodelhang.crc.getImageData(0, 0, canvas.width, canvas.height);
        update();
        function update() {
            Inheritance_Rodelhang.crc.putImageData(imagedata, 0, 0);
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
                let tree = new Inheritance_Rodelhang.Tree();
                objects.push(tree);
            }
        } //generateTrees
        function generateSnow() {
            for (let i = 0; i < 150; i++) {
                let snowflake = new Inheritance_Rodelhang.Snow();
                objects.push(snowflake);
            }
        } //generateSnow
        function generateClouds() {
            cloudOne = new Inheritance_Rodelhang.CloudOne();
            cloudTwo = new Inheritance_Rodelhang.CloudTwo();
        } //generateClouds
        function generateChild() {
            for (let i = 0; i < 10; i++) {
                let child = new Inheritance_Rodelhang.Child();
                objects.push(child);
            }
        } //generateChild
        function drawSky() {
            Inheritance_Rodelhang.crc.fillStyle = "#CEF6F5";
            Inheritance_Rodelhang.crc.fillRect(0, 0, 500, 700);
            Inheritance_Rodelhang.crc.fill();
        } //drawSky
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
        } //drawHillside
        function drawSun() {
            Inheritance_Rodelhang.crc.beginPath();
            Inheritance_Rodelhang.crc.arc(430, 100, 50, 0, 2 * Math.PI);
            Inheritance_Rodelhang.crc.fillStyle = "#FFFF00";
            Inheritance_Rodelhang.crc.fill();
        } //drawSun
    } //init
})(Inheritance_Rodelhang || (Inheritance_Rodelhang = {})); //namespace
//# sourceMappingURL=main.js.map