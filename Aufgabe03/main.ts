/* 
Aufgabe: 3
Name: Monetta Marchiano
Matrikel: 256063
Datum: 10.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

//namespace start 
namespace A3 {

//_____________________________________________________________________________________________________________________

    //installs eventListener on document
    //calls init when the DOM is loaded
    //it can trouble the performance loading scripts while DOM is busy loading
    document.addEventListener("DOMContentLoaded", init);

    //global let
    //array with src.strings for whole content
    let cardContentAll: string[] = [];
    //array containing src.strings for handCards
    let cardContentHand: string[] = [];
    //array containing src.strings for stackCards
    let cardContentStack: string[] = [];
    //array containing src.strings for discardCards
    let cardContentDiscard: string[] = [];
    //main
    let main: HTMLElement;

//_____________________________________________________________________________________________________________________    

    function init(): void {

        //cards will get the value [promtCards] returns
        let cards: number = promptCards();

        //debugger
        console.log(cards + " cards");
        createGame(cards);
    }

//_____________________________________________________________________________________________________________________    

    function promptCards() {

        //represents the string the prompt() returns
        let cards: string = prompt("Ziehe zwischen 5 und 10 Karten!");

        //represents the string parsed to an integer
        let cardsSum: number = parseInt(cards);

        //checks wrong conditions
        if (isNaN(cardsSum) || cardsSum < 5 || cardsSum > 10) {

            //gives alert
            alert("Falsche Eingabe.");

            //debugger
            console.log("invalide input");

            //reloads page
            location.reload();
        }
        //when if conditions are not true
        else {

            //debugger
            console.log("valide input");

            //returns [cardsSum]
            return cardsSum;
        }
    }

//_____________________________________________________________________________________________________________________     

    function createGame(_cards: number): void {

        //debugger
        console.log(">create Game<");

        //installs eventListener on body
        document.body.addEventListener("keydown", spaceDown);

        //debugger
        console.log(">>install Eventlistener for keydown space");

        //gives main a value > creates the element in DOM
        main = document.createElement("main");

        //body appends main as its child
        document.body.appendChild(main);

        //debugger
        console.log(">main<");

        //calls..
        createSections(_cards);

        //calls...
        createFooter();
    }

//_____________________________________________________________________________________________________________________     

    function createSections(_cards: number): void {

        //debugger
        console.log(">GameArea<");

        //fills cardContentAll
        //kompletter Satz UNO-Karten | 11=change | 22=2+ | 33=nono
        cardContentAll = [
            //blue
            "img/blue00.png", "img/blue01.png", "img/blue02.png", "img/blue03.png", "img/blue04.png",
            "img/blue05.png", "img/blue06.png", "img/blue07.png", "img/blue08.png", "img/blue09.png",
            "img/blue11.png", "img/blue33.png", "img/blue22.png",
            "img/blue01.png", "img/blue02.png", "img/blue03.png", "img/blue04.png",
            "img/blue05.png", "img/blue06.png", "img/blue07.png", "img/blue08.png", "img/blue09.png",
            "img/blue11.png", "img/blue33.png", "img/blue22.png",

            //green
            "img/green00.png", "img/green01.png", "img/green02.png", "img/green03.png", "img/green04.png",
            "img/green05.png", "img/green06.png", "img/green07.png", "img/green08.png", "img/green09.png",
            "img/green11.png", "img/green33.png", "img/green22.png",
            "img/green01.png", "img/green02.png", "img/green03.png", "img/green04.png",
            "img/green05.png", "img/green06.png", "img/green07.png", "img/green08.png", "img/green09.png",
            "img/green11.png", "img/green33.png", "img/green22.png",

            //red
            "img/red00.png", "img/red01.png", "img/red02.png", "img/red03.png", "img/red04.png",
            "img/red05.png", "img/red06.png", "img/red07.png", "img/red08.png", "img/red09.png",
            "img/red11.png", "img/red33.png", "img/red22.png",
            "img/red01.png", "img/red02.png", "img/red03.png", "img/red04.png",
            "img/red05.png", "img/red06.png", "img/red07.png", "img/red08.png", "img/red09.png",
            "img/red11.png", "img/red33.png", "img/red22.png",

            //yellow
            "img/yellow00.png", "img/yellow01.png", "img/yellow02.png", "img/yellow03.png", "img/yellow04.png",
            "img/yellow05.png", "img/yellow06.png", "img/yellow07.png", "img/yellow08.png", "img/yellow09.png",
            "img/yellow11.png", "img/yellow33.png", "img/yellow22.png",
            "img/yellow01.png", "img/yellow02.png", "img/yellow03.png", "img/yellow04.png",
            "img/yellow05.png", "img/yellow06.png", "img/yellow07.png", "img/yellow08.png", "img/yellow09.png",
            "img/yellow11.png", "img/yellow33.png", "img/yellow22.png",

            //extra            
            "img/zion11.png", "img/zion11.png", "img/zion11.png", "img/zion11.png",
            "img/zion44.png", "img/zion44.png", "img/zion44.png", "img/zion44.png"];

        //shuffles array
        shuffleArray(cardContentAll);

        //creates new array containing sliced out cards from [cardContentAll], depending on number, which the user put in
        cardContentHand = cardContentAll.slice(0, _cards);

        //creates new array containing sliced out cards from [cardContentAll], one after the number the user put in 
        cardContentDiscard = cardContentAll.slice(_cards, (_cards + 1));

        //creates new array containing sliced out cards form [cardContentAll], appending the cards left over
        cardContentStack = cardContentAll.slice((_cards + 1), cardContentAll.length);

        //calling functions
        createStack();
        createDiscard();
        createSortButt();
        createHand();
    }

//__________________________________________________________________________________________________________________    

    function shuffleArray(_array: string[]): void {
        console.log("shuffle le Array");

        let b: number = 0;
        let rndm: any = null;

        for (let a: number = _array.length - 1; a > 0; a -= 1) {
            b = Math.floor(Math.random() * (a + 1));
            rndm = _array[a];
            _array[a] = _array[b];
            _array[b] = rndm;
        }
    }

//__________________________________________________________________________________________________________________    

    function createStack(): void {

        //debugger
        console.log(">create Stack<");

        //creates section, give id and appends it to main
        let stackSec: HTMLElement = document.createElement("section");
        stackSec.id = "stackSec";
        main.appendChild(stackSec);

        //debugger
        console.log("load StackSec");

        //createsCard with this src in stackSec
        createCard("img/backside.png", stackSec);
    }

    function createDiscard(): void {

        //debugger
        console.log(">create Discard<");

        //creates section, give id and appends it to main
        let discardSec: HTMLElement = document.createElement("section");
        discardSec.id = "discardSec";
        main.appendChild(discardSec);

        //debugger
        console.log("load DiscardSec");

        //createsCard with putting out src from the first string of cardContentDiscard in discardSec
        createCard(cardContentDiscard[0], discardSec);
    }

    function createSortButt(): void {

        //debugger
        console.log(">create SortButt<");

        //creates section, give id and appends it to main
        let buttSec: HTMLElement = document.createElement("section");
        buttSec.id = "buttSec";
        main.appendChild(buttSec);

        //debugger
        console.log("load buttSec");

        //creates button, gives id, innerHTML
        let sortButt: HTMLButtonElement = document.createElement("button");
        sortButt.id = "sortButt";
        sortButt.innerHTML = "sort cards";

        //install EventListenener 
        sortButt.addEventListener("click", sortButtAction);

        //debugger
        console.log(">> install EventListener to sort cards");

        //appends button to it's section
        buttSec.appendChild(sortButt);

        //debugger
        console.log("load sortButt");
    }
    
    function createHand(): void {

        //debugger
        console.log(">create Hand<");

        //creates section, give id and appends it to main
        let handSec: HTMLElement = document.createElement("section");
        handSec.id = "handSec";
        main.appendChild(handSec);

        //debugger
        console.log("load HandSec");

        //calls createCard depending on the length of cardContentHand 
        for (let i: number = 0; i < cardContentHand.length; i++) {

            //debugger
            console.log(cardContentHand[i]);

            //calls createCard with putting out src from the strings of cardContentHand, depending on how often the loop looped [i] in handSec
            createCard(cardContentHand[i], handSec);
        }
    }
    
//_____________________________________________________________________________________________________________________
    
    function createCard(_src: string, _parent: HTMLElement): void {

        //debugger
        console.log(">create Card<");

        //creates img, takes given parameter to define src of the img 
        let card: HTMLImageElement = document.createElement("img");
        card.src = _src;

        //adds classes to the classList 
        //vereinfacht >> element.classList.add('red', 'no_margin');
        card.classList.add(_src.substring(4, _src.length - 4), //color+number
            _src.substring(4, _src.length - 6),                //color
            _src.substring(_src.length - 6, _src.length - 4)); //number

        //debugger
        console.log(card.classList);

        // installs EventListener depending on in which section the card is located
        switch (_parent.id) {
            case "stackSec":
                card.addEventListener("click", takeCard);
                console.log(">> install EventListener on stack to take");
                break;
            case "handSec":
                card.addEventListener("click", playCard);
                console.log(">> install EventListener on cards to play");
                break;
            default:
                break;
        }
        //appends img to given parameter _parent
        _parent.appendChild(card);

        //debugger
        console.log("load card");
    }

    function changeLocation(_checkedCard: HTMLImageElement, _newParent: HTMLElement): void {
        //debugger
        console.log("#change Location");

        //removes img delivered through a parameter from old parent
        //"child forces parent to remove itself"
        _checkedCard.parentNode.removeChild(_checkedCard);

        //also remove eventlistener from img delvered through a parameter
        _checkedCard.removeEventListener("click", playCard);

        //debugger
        console.log(">> remove EventListener from played card");

        //adds style class to classList of _checkedCard to let them rotate on discard
        //gives random number between 0 and 16, excluding 16
        let random: number = Math.floor(Math.random() * 16);

        //switch gives a case for every random umber you can get
        switch (random) {
            case 0:
                //adds "class" to clasList if checkedCard
                _checkedCard.classList.add();
                //debugger
                console.log("rotate0");
                break;
            case 1:
                _checkedCard.classList.add("rotate22");
                console.log("rotate22");
                break;
            case 2:
                _checkedCard.classList.add("rotate45");
                console.log("rotate45");
                break;
            case 3:
                _checkedCard.classList.add("rotate67");
                console.log("rotate67");
                break;
            case 4:
                _checkedCard.classList.add("rotate90");
                console.log("rotate90");
                break;
            case 5:
                _checkedCard.classList.add("rotate112");
                console.log("rotate112");
                break;
            case 6:
                _checkedCard.classList.add("rotate135");
                console.log("rotate135");
                break;
            case 7:
                _checkedCard.classList.add("rotate157");
                console.log("rotate157");
                break;
            case 8:
                _checkedCard.classList.add("rotate180");
                console.log("rotate180");
                break;
            case 9:
                _checkedCard.classList.add("rotate202");
                console.log("rotate202");
                break;
            case 10:
                _checkedCard.classList.add("rotate225");
                console.log("rotate225");
                break;
            case 11:
                _checkedCard.classList.add("rotate247");
                console.log("rotate247");
                break;
            case 12:
                _checkedCard.classList.add("rotate270");
                console.log("rotate270");
                break;
            case 13:
                _checkedCard.classList.add("rotate292");
                console.log("rotate292");
                break;
            case 14:
                _checkedCard.classList.add("rotate315");
                console.log("rotate315");
                break;
            case 15:
                _checkedCard.classList.add("rotate337");
                console.log("rotate337");
                break;
        }

        //new parent appends delivered img/card
        _newParent.appendChild(_checkedCard);

        //debugger
        console.log("reload card");
    }

//__________________________________________________________________________________________________________________     

    function spaceDown(_event: KeyboardEvent): void {
        //debugger
        console.log("#spaceDown");

        //identify, which key was pressed, if it was "space", do {this}
        if (_event.keyCode = 32) {
            takeCard(_event);
        }
    }

    function sortButtAction(_event: MouseEvent): void {
        //debugger
        console.log("#sortButtAction");

        //sorts array [cardContentHand]
        cardContentHand.sort();

        //getsElementById handSec and force it's parent Element to remove itself
        document.getElementById("handSec").parentElement.removeChild(document.getElementById("handSec"));

        //create new HandSec cotaining the now sorted array
        createHand();
    }

    function takeCard(_event: Event): void {
        //debugger
        console.log("#takeCard");

        //check stack array
        console.log(cardContentStack);

        //remove last card from stack array & name it [takenCard]
        let takenCard: string = cardContentStack.pop();

        //check stack array
        console.log(cardContentStack);

        //if stack.length ever gets smaller than 1, remove both eventListeners
        if (cardContentStack.length < 1) {
            document.body.removeEventListener("keydown", spaceDown);
            document.getElementById("backside").removeEventListener("click", takeCard);
            //debugger
            console.log(">> remove EventListeners for taking cards");
        }

        //check hand array
        console.log(cardContentHand);

        //insert [takenCard] in hand array
        cardContentHand.push(takenCard);

        //check hand array
        console.log(cardContentHand);

        //createCard [takenCard] in [handSec], 'cause it was only a string in an array 
        //with createCard it becomes an element in DOM with the parent handSec
        createCard(takenCard, document.getElementById("handSec"));
    }

    function playCard(_event: MouseEvent): void {
        //debugger
        console.log("#playCard");

        //idetify event target
        let checkedCard: HTMLImageElement = <HTMLImageElement>_event.target;

        //debugger
        console.log(checkedCard);

        //idetify position in hand array
        let handPosition: number = cardContentHand.indexOf(checkedCard.src);

        //remove card from hand array
        cardContentHand.splice(handPosition, 1);

        //insert card at end of discard array
        cardContentDiscard.push(checkedCard.src);

        //change location of element in DOM [from handSec to discardSec]
        changeLocation(checkedCard, document.getElementById("discardSec"));
    }

//__________________________________________________________________________________________________________________    

    function createFooter(): void {
        console.log(">Footer<");

        let footer: HTMLElement = document.createElement("footer");
        document.body.appendChild(footer);

        let footerP: HTMLParagraphElement = document.createElement("p");
        footerP.innerHTML = "© Monetta Marchiano";
        footer.appendChild(footerP);

        let footerSpan: HTMLSpanElement = document.createElement("span");
        footer.appendChild(footerSpan);

        let userLink: HTMLAnchorElement = document.createElement("a");
        userLink.href = "https://monettamarchiano.github.io";
        userLink.target = "_blank";
        userLink.innerText = "Userpage";
        footerSpan.appendChild(userLink);

        console.log("load footer");

    }
    
//__________________________________________________________________________________________________________________
//namespace end     
}       