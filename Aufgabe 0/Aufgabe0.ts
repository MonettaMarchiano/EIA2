/* 
Aufgabe: 0
Name: Monetta Marchiano
Matrikel: 256063
Datum: 07.10.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

function text(): void {                                                       //vom Typ Void
    var n : string = prompt ("Wie heißt du?");                                 // Wert ist "Wie heißt du?"
    var node : HTMLElement = document.getElementById("X");                     // node-Variable ist vom Typ HTMLElement; Methode wird aufgerufen
    node.innerHTML += "Hey ";                                                  // node ist Name der Variable, welche vorher aufgerufen wurde; 
    node.innerHTML += n ;
    node.innerHTML += ", alles gut?";
    console.log ("Hey ", n , ", alles gut?");
}

document.addEventListener('DOMContentLoaded', text);

