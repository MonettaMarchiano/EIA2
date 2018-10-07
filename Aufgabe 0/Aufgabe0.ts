/* 
Aufgabe: 0
Name: Monetta Marchiano
Matrikel: 256063
Datum: 07.10.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

var n : string = "";

function text() {
    var n = prompt ("Wie heißt du?");
    var node = document.getElementById("X");
    node.innerHTML += "Hey ";
    node.innerHTML += n ;
    node.innerHTML += ", alles gut?";
    console.log ("Hey ", n , ", alles gut?");
}

document.addEventListener('DOMContentLoaded', text);

