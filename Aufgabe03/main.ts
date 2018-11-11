/* 
Aufgabe: 3
Name: Monetta Marchiano
Matrikel: 256063
Datum: 10.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/
    
namespace A3 {

    document.addEventListener("DOMContentLoaded", init);
    
    //declare globals
    let cardContentAll: string[];
    let cardContentHand: string[];
    let cardContentStack: string[];
    let cardContentDiscard: string[];
    let main: HTMLElement = document.getElementById("main");

    function init() {
        //declare [cards] & assgin [promt()-input] as it's value
        //the prompt() method displays a dialog box that prompts the visitor for input
        let cards: string = prompt("Ziehe zwischen 5 und 10 Karten!");
        //declare [cardsSum] & assign parsed input as it's value
        let cardsSum: number = parseInt(cards);

        //if (conditions for invaide input)
        if (isNaN(cardsSum) || cardsSum < 5 || cardsSum > 10) {
            //condition [true]
            alert("Falsche Eingabe.");
            //the reload() method is used to reload the current document >> like a reload button
            location.reload();
        }
        //condition [false]
        else {
            //call [createGame] & transfer parameter [cardsSum]
             createGame(cardsSum);
        }
    }

    function createGame(_cards: number): void {
        
        //install EventListener on body | [keydown] releasing [spaceDown]
        document.body.addEventListener("keydown", spaceDown);

        //>> 10=missTurn| 11=changeDirection | 12=2+ | ajoker00=colorChange | ajoker04=colorChange4+|
        cardContentAll = [
            //blue | 1x0 | 2x1-9, missTurn, changeDirection, take2Cards
            "img/blue00.png", "img/blue01.png", "img/blue02.png", "img/blue03.png", "img/blue04.png", 
            "img/blue05.png", "img/blue06.png", "img/blue07.png", "img/blue08.png", "img/blue09.png",
            "img/blue10.png", "img/blue11.png", "img/blue12.png",
                              "img/blue01.png", "img/blue02.png", "img/blue03.png", "img/blue04.png",
            "img/blue05.png", "img/blue06.png", "img/blue07.png", "img/blue08.png", "img/blue09.png",
            "img/blue10.png", "img/blue11.png", "img/blue12.png",
            //green | 1x0 | 2x1-9, missTurn, changeDirection, take2Cards
            "img/green00.png", "img/green01.png", "img/green02.png", "img/green03.png", "img/green04.png",
            "img/green05.png", "img/green06.png", "img/green07.png", "img/green08.png", "img/green09.png",
            "img/green10.png", "img/green11.png", "img/green12.png",
                               "img/green01.png", "img/green02.png", "img/green03.png", "img/green04.png",
            "img/green05.png", "img/green06.png", "img/green07.png", "img/green08.png", "img/green09.png",
            "img/green10.png", "img/green11.png", "img/green12.png",
            //red | 1x0 | 2x1-9, missTurn, changeDirection, take2Cards
            "img/red00.png", "img/red01.png", "img/red02.png", "img/red03.png", "img/red04.png",
            "img/red05.png", "img/red06.png", "img/red07.png", "img/red08.png", "img/red09.png",
            "img/red10.png", "img/red11.png", "img/red12.png",
                             "img/red01.png", "img/red02.png", "img/red03.png", "img/red04.png",
            "img/red05.png", "img/red06.png", "img/red07.png", "img/red08.png", "img/red09.png",
            "img/red10.png", "img/red11.png", "img/red12.png",
            //yellow | 1x0 | 2x1-9, missTurn, changeDirection, take2Cards
            "img/yellow00.png", "img/yellow01.png", "img/yellow02.png", "img/yellow03.png", "img/yellow04.png",
            "img/yellow05.png", "img/yellow06.png", "img/yellow07.png", "img/yellow08.png", "img/yellow09.png",
            "img/yellow10.png", "img/yellow11.png", "img/yellow12.png",
                                "img/yellow01.png", "img/yellow02.png", "img/yellow03.png", "img/yellow04.png",
            "img/yellow05.png", "img/yellow06.png", "img/yellow07.png", "img/yellow08.png", "img/yellow09.png",
            "img/yellow10.png", "img/yellow11.png", "img/yellow12.png",
            //jokers | 4x colorChange, colorChangeTake4
            "img/ajoker00.png", "img/ajoker00.png", "img/ajoker00.png", "img/ajoker00.png",
            "img/ajoker04.png", "img/ajoker04.png", "img/ajoker04.png", "img/ajoker04.png"];

        //calls [shuffleArray] & transfers [cardContentAll] as a parameter
        shuffleArray(cardContentAll);
        
        //the slice() method returns the selected elements in an array, as a new array object
        //assign sliced out elements, dependet on [_cards] as [cardContentHand]'s value
        cardContentHand = cardContentAll.slice(0, _cards);
        //assign sliced out element, dependet on [_cards] as [cardContentDiscards]'s value
        cardContentDiscard = cardContentAll.slice(_cards, (_cards + 1));
        //assign sliced out elements, dependet on [_cards] as [cardContentStack]'s value
        cardContentStack = cardContentAll.slice((_cards + 1), cardContentAll.length);

        //calls [createSection] & transfers [string] as parameter
        createSection("stack");
        createSection("discard");
        createSection("button");
        createSection("hand");

    }

    function shuffleArray(_array: string[]): void {
        let b: number = 0;
        let rndm: any = null;
        for (let a: number = _array.length - 1; a > 0; a -= 1) {
            b = Math.floor(Math.random() * (a + 1));
            rndm = _array[a];
            _array[a] = _array[b];
            _array[b] = rndm;
        }
    }

    function createSection(_name: string): void {
        //declare [section] & assgin created section Element as it's value
        let section: HTMLElement = document.createElement("section");
        //define id >> parameter [_name] + [string] => id
        section.id = _name + "Sec";
        //[main] appends [created section] as it's child 
        main.appendChild(section);

        //following commands are dependent on value of parameter [_name]
        switch (_name) {
            //for value ["stack"]
            case "stack":
                //calls [createCard] & transfers [src.string] & [created section] as parameter
                createCard("img/backside.png", document.getElementById(section.id));
                break;
            //for value ["discard"]
            case "discard":
                //calls [createCard] & transfers [first element of cardContentDiscard] & [created section] as parameter            
                createCard(cardContentDiscard[0], document.getElementById(section.id));
                break;
            //for value ["button"]
            case "button":
                let sortButt: HTMLButtonElement = document.createElement("button");
                sortButt.id = "sortButt";
                sortButt.innerHTML = "sort cards";
                sortButt.addEventListener("click", sortButtAction);
                document.getElementById(section.id).appendChild(sortButt);
                break;
            //for value ["hand"]
            case "hand":
                //runs through array [cardContentHand]
                for (let i: number = 0; i < cardContentHand.length; i++) {
                    //calls [createCard] & transfers [element of cardContentHand, index dependent on run-number] & [created section] as parameter                                
                    createCard(cardContentHand[i], document.getElementById(section.id));
                }
                break;
        }

    }

    function createCard(_src: string, _parent: HTMLElement): void {
        //declare [card] & assgin created img Element as it's value
        let card: HTMLImageElement = document.createElement("img");
        //define src with parameter [_src]
        card.src = _src;
        //the classList property returns the class name(s) of an element, as a DOMTokenList object >> use add() to modify classList property
        //adds color &  number to [classList] of created [img]
        card.classList.add(
            //the substring() method extracts the characters from a string, between two specified indices, & returns the new sub string
            /*color*/_src.substring(4, _src.length - 6),
            /*number*/_src.substring(_src.length - 6, _src.length - 4));

        //following commands are dependent on value of parameter [_parent.id]
        switch (_parent.id) {
            //for value ["stackSec"]
            case "stackSec":
                //install EventListener on [card] | [click] releasing [takeCard]
                card.addEventListener("click", takeCard);
                break;
            //for value ["handSec"]
            case "handSec":
                //install EventListener on [card] | [click] releasing [playCard]           
                card.addEventListener("click", playCard);
                break;
        }
        //
        _parent.appendChild(card);
    }

    function spaceDown(_event: KeyboardEvent): void {
        //if(condition space is pressed key)
        if (_event.keyCode == 32) {
            // call [takeCard] & transfer [_event] as a parameter 
            takeCard(_event);
        }
    }

    function sortButtAction(_event: MouseEvent): void {
        //the sort() method sorts the items of an array [cardContentHand] in alphabetical order
        cardContentHand.sort();
        //the removeChild() method removes a specified child node of the specified element
        //main removes it's child Element [handSec] & it'S children
        main.removeChild(document.getElementById("handSec"));
        //calls [createSection] & transfers parameter ["hand"]
        createSection("hand");
    }

    function takeCard(_event: Event): void {
        //declare [takenCard] & assgin [cardContentStack.pop()] as it's value
        //the pop() method removes the last element of an array, & returns that element
        let takenCard: string = cardContentStack.pop();
        
        //if(condition for an empty [cardContentStack] array)
        if (cardContentStack.length < 1) {
            //[true]
            //remove EventListener from body | [keydown] releasing [spaceDown]
            document.body.removeEventListener("keydown", spaceDown);
            //remove EventListener from img in [stackSec] | [click] releasing [takeCard]
            //first get element by id [stackSec], then refer to it's first an only child
            //because the [img] itself has no id this indirect way is necessary to get access to the [stackSec<img]
            document.getElementById("stackSec").firstChild.removeEventListener("click", takeCard);
        }

        //the push() method adds new items to the end of an array, & returns the new length
        //push [takenCard] at the end of [cardContentHand]
        cardContentHand.push(takenCard);
        //call [createCard] & transfer parameters [takenCard] & [handSec]
        createCard(takenCard, document.getElementById("handSec"));
    }

    function playCard(_event: MouseEvent): void {
        //declare [checkedCard] & assgin [_event.target] as it's value
        let checkedCard: HTMLImageElement = <HTMLImageElement>_event.target;
        //declare [handPosition] & assgin [array.IndexOf([checkedCard.src])] as it's value
        //the indexOf() method searches the array for the specified item, & returns its position
        let handPosition: number = cardContentHand.indexOf(checkedCard.src);
        
        //the splice() method adds/removes items to/from an array, & returns the removed item(s)
        //splices out the index element number which is [_event.target]
        cardContentHand.splice(handPosition, 1);
        //push() [checkedCard.src] at the end of [cardContentDiscard]
        cardContentDiscard.push(checkedCard.src);
        
        //[handSec] removes [_event.target] & it's children
        checkedCard.parentNode.removeChild(checkedCard);
        //remove EventListener from checkedCard | [click] releasing [playCard]
        checkedCard.removeEventListener("click", playCard);

        //declare [rotationValues] & assgin [array.string] as it's value
        let rotationValues: string[] = ["0", "22", "45", "67", "90", "112", "135", "157", "180", "202", "225", "247", "270", "292", "315", "337"];
        //declare [random] & assgin [random number between 0 and [length of array] as it's value
        let random: number = Math.floor(Math.random() * rotationValues.length);
        //add rotation.class to [checkedCard]
        checkedCard.classList.add("rotate" + rotationValues[random]);
        
        //[discardSec] appends [checkedCard] a it's child
        document.getElementById("discardSec").appendChild(checkedCard);
    }
}       