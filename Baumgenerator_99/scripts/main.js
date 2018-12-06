/*
Aufgabe: 5
Name: Monetta Marchiano
Matrikel: 256063
Datum: 02.12.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var wbk_99;
(function (wbk_99) {
    document.addEventListener("DOMContentLoaded", init);
    //_____initial function
    function init() {
        // create fieldsets (in "dynamic")
        createFieldsets(wbk_99.items);
        // eventListener for change => changeAttributes 
        document.getElementsByTagName("body")[0].addEventListener("input", changeAttributes);
    }
    //_____creates all fieldsets in "dynamic" based on data-content
    function createFieldsets(_items) {
        //get div "dynamic"
        let dynDiv = document.getElementById("dynamic");
        //for loop through "outer array" keys (Baumart, Halterung, Schmuck)
        //"for every key in items"
        for (let key in wbk_99.items) {
            //variable for the "inner array" => array of heteroItems
            let value = wbk_99.items[key];
            //create fieldset
            let parentFieldset = createFieldset(dynDiv, key);
            //for loop through "inner arrays"
            //wenn outer for "Baumart" hat
            //werden hier die heteroItems von baumart durchiteriert => Tanne,Fichte...
            //"for every element with the key chosen above"
            for (let i = 0; i < value.length; i++) {
                switch (key) {
                    case ("Baumart"):
                    case ("Halterung"):
                    case ("Lieferdienst"):
                    case ("Lieferart"):
                        //create Radio Button "for every element with the key chosen above"
                        createRadioButt(parentFieldset, value[i], key);
                        break;
                    case ("Beleuchtung"):
                    case ("Glaskugeln"):
                    case ("Schmuck"):
                        //create Stepper "for every element with the key chosen above"
                        createStepper(parentFieldset, value[i], key);
                        break;
                }
            }
        }
    }
    //_____creates fieldset >> returns created fieldset: HTMLFieldSetElement
    function createFieldset(_parent, _name) {
        //create fieldset & legend
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        //give fieldset an id and set an Attribute
        //HTML =>>  <fieldset id="fieldset_Baumart" location="dyn"> </fieldset>"
        fieldset.id = "fieldset_" + _name;
        fieldset.setAttribute("location", "dyn");
        //give legend a innerText
        legend.innerText = _name;
        //append legend to fieldset && fieldset to _parent
        fieldset.appendChild(legend);
        _parent.appendChild(fieldset);
        //returns <fieldset>
        return fieldset;
    }
    //_____creates one radio
    function createRadioButt(_fieldSet, _item, _key) {
        //create RadioButton
        let radioButt = document.createElement("input");
        //add type, value, name and id
        //radioButtons belonging to the same group need the same name to indetify =>> e.g. name="Baumart"
        radioButt.type = "radio";
        radioButt.value = _item.name;
        radioButt.name = "radioGroup_" + _key;
        radioButt.id = "radioButt_" + _item.name;
        //set inividual Attributes
        radioButt.setAttribute("itemName", _item.name);
        radioButt.setAttribute("key", _key);
        radioButt.setAttribute("price", _item.price.toString());
        //"show" is default "false" ==> changes in changeAttributes
        //then needed for writeBasket to idetify the elements which should be in the basket
        radioButt.setAttribute("show", "false");
        //append radio to fieldset
        _fieldSet.appendChild(radioButt);
        //create label for radio
        let label = document.createElement("label");
        //the attribute "for" has the id of the radio it belongs to as it's value
        label.setAttribute("for", radioButt.id);
        label.innerHTML = _item.name;
        //append label to fielset | label an radios are siblings!
        _fieldSet.appendChild(label);
    }
    //_____creates stepper
    function createStepper(_fieldSet, _item, _key) {
        //create label (<p>) for stepper
        let label = document.createElement("p");
        label.innerHTML = _item.name;
        //append p to fieldset
        _fieldSet.appendChild(label);
        //create stepper
        //add type, min, max, step && id
        let stepper = document.createElement("input");
        stepper.type = "number";
        stepper.min = "0";
        stepper.max = "20";
        stepper.step = "1";
        stepper.id = "stepper_" + _item.name;
        //set inividual Attributes
        stepper.setAttribute("itemName", _item.name);
        stepper.setAttribute("key", _key);
        stepper.setAttribute("price", _item.price.toString());
        //"show" is default "false" ==> changes in changeAttributes
        //then needed for writeBasket to idetify the elements which should be in the basket
        stepper.setAttribute("show", "false");
        //append stepper to fieldset
        _fieldSet.appendChild(stepper);
    }
    //_____function for change event
    function changeAttributes(_event) {
        //variable for the event target | the input with the change
        let target = _event.target;
        //this construct changes the attribute "show" if needed
        switch (target.type) {
            //if target.type=radio
            case ("radio"):
                //variable for inner array with key=target.key
                let tempVal = wbk_99.items[target.getAttribute("key")];
                //1st==> set every radio with key=target.key "false"
                //for every index of the inner array with key=target.key
                for (let i = 0; i < tempVal.length; i++) {
                    //variable for name
                    let name = tempVal[i].name;
                    //get matching radio for every [i]
                    let radio = document.getElementById("radioButt_" + name);
                    //show=false
                    radio.setAttribute("show", "false");
                }
                //2nd ==> set the target "true"
                target.setAttribute("show", "true");
                writeBasket();
                break;
            //if target.type=number
            case ("number"):
                //case 1: target.value=0
                if (target.value == "0") {
                    //set "false"
                    target.setAttribute("show", "false");
                }
                else {
                    //set "true"
                    target.setAttribute("show", "true");
                }
                writeBasket();
                break;
            //for target.type "text"
            case ("text"):
                writePersonsData();
                break;
        }
    }
    //_____creates p's in basket & fills them
    function writeBasket() {
        //get all <inputs> in a NodeList (list of nodes)
        let inputs = document.getElementsByTagName("input");
        //variable for basket, get basket div by ID
        let basketDiv = document.getElementById("basket");
        //define, that basket div has an innerText && it's empty (>>delete older bullshit)
        basketDiv.innerText = "";
        //create caption
        let caption = document.createElement("h2");
        //add innerText
        caption.innerText = "Bestellübersicht:";
        //append caption to basketDiv
        basketDiv.appendChild(caption);
        //for every index of the node list inputs ==> every input element
        for (let i = 0; i < inputs.length; i++) {
            //only if input type= radio or number
            if (inputs[i].type == "radio" || inputs[i].type == "number") {
                //create variables to simplify if{if{} else{if{}else{}}} construct
                let input = inputs[i];
                let attrName = input.getAttribute("itemName");
                let attrKey = input.getAttribute("key");
                let attrShow = input.getAttribute("show");
                let attrPrice = input.getAttribute("price");
                //if the attribute "show" is "true"
                if (attrShow == "true") {
                    //create p
                    let p = createParagraph(basketDiv);
                    //get access to previous p element
                    let previousP = p.previousSibling;
                    //add attribute price (from input) to p
                    p.setAttribute("price", attrPrice);
                    //if input show is true && type is radio
                    switch (input.type) {
                        case ("radio"):
                            //check if input attribute key="Halterung" 
                            //&& if "Baumart" was already checked 
                            if (attrKey == "Halterung" && previousP.hasAttribute("approved") == false) {
                                //add innerText to p
                                p.innerText = "Bitte zuerst Baumart wählen!";
                                p.style.color = "red";
                                //add attribute to check in calc function if there is something to cals in this p
                                p.setAttribute("toCalc", "false");
                            }
                            else if (attrKey == "Lieferdienst") {
                                //add innerText to p
                                p.innerText = "Versand mit " + attrName + " à " + attrPrice + " €";
                                //add attribute to check in next else if, if a radio with key=="Lieferdienst" is selected
                                p.setAttribute("approved", "true");
                                //add attribute to check in calc function if there is something to cals in this p
                                p.setAttribute("toCalc", "true");
                            }
                            else if (attrKey == "Lieferart" && previousP.hasAttribute("approved") == false) {
                                //add innerText to p
                                p.innerText = "Bitte zuerst Lieferdienst wählen!";
                                //make text red
                                p.style.color = "red";
                                //add attribute to check in calc function if there is something to cals in this p
                                p.setAttribute("toCalc", "false");
                            }
                            else if (attrKey == "Lieferart" && attrName != "Standard") {
                                //add innerText to p
                                p.innerText = "zzgl. 1x " + attrName + "-Zuschlag" + " à " + attrPrice + " €";
                                //add attribute to check in calc function if there is something to cals in this p
                                p.setAttribute("toCalc", "true");
                            }
                            else if (attrKey == "Lieferart" && attrName == "Standard") {
                                //add innerText to p
                                p.innerText = "kostenloser " + attrName + "versand";
                                //add attribute to check in calc function if there is something to cals in this p
                                p.setAttribute("toCalc", "true");
                            }
                            else {
                                if (attrKey == "Baumart") {
                                    //add attribute to check in next else if, if a radio with key=="Lieferdienst" is selected
                                    p.setAttribute("approved", "true");
                                }
                                //add innerText to p
                                p.innerText = "1x " + attrName + " à " + attrPrice + " €";
                                //add attribute to check in calc function if there is something to cals in this p
                                p.setAttribute("toCalc", "true");
                            }
                            //add attribute "value" to p
                            //type radio has value=1 'cause you only buy 1 Baumart/Halterung
                            p.setAttribute("value", "1");
                            break;
                        //if input.key is "Glaskugeln" && input.type is number
                        case ("number"):
                            if (attrKey == "Glaskugeln") {
                                //add innerText to p
                                p.innerText = input.value + "x " + attrKey + " in " + attrName + " à " + attrPrice + " €";
                                console.log(input.value);
                            }
                            else {
                                //add innerText to p
                                p.innerText = input.value + "x " + attrName + " à " + attrPrice + " €";
                                console.log(input.value);
                            }
                            p.setAttribute("toCalc", "true");
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        //price = calc price (returns price + € as string)
        let price = calcPrice(basketDiv);
        //new <p> in basketDiv
        let p = createParagraph(basketDiv);
        //add innerText
        //containing "string" + priceString
        p.innerText = "Gesamtpreis: " + price;
        //add css-style 
        //text-decoration="overline";
        p.style.textDecoration = "overline";
    }
    //_____calculate final price >> return price + €: string
    function calcPrice(_basketDiv) {
        //variable for price = 0
        let price = 0;
        //get all <p> in baskeDiv in a NodeList (list of nodes)
        let basketPs = _basketDiv.getElementsByTagName("p");
        //for every node in the nodeList
        for (let i = 0; i < basketPs.length; i++) {
            if (basketPs[i].getAttribute("toCalc") == "true") {
                //Einzelpreis = attr"price"
                //The parseFloat() function parses a string and returns a floating point number.
                let singlePrice = parseFloat(basketPs[i].getAttribute("price"));
                //Stückzahl = attr"value"
                //The parseInt() function parses a string and returns an integer.
                let value = Number(basketPs[i].getAttribute("value"));
                //Endpreis += (Einzelpreis x Stückzahl)
                price += (singlePrice * value);
            }
            else {
                //continue with the next basketPs[i]
                continue;
            }
        }
        //priceString
        //The toString() method converts a number to a string.
        let priceString = price.toString() + " €";
        console.log("berechnet:" + priceString);
        //return priceString
        return priceString;
    }
    //_____checks and writes a persons data after submit
    function writePersonsData() {
        //get persData
        let persData = document.getElementById("datenReq");
        persData.innerText = "";
        //get NodeList fo inputs in data
        let inputs = document.getElementById("daten").getElementsByTagName("input");
        let write = 0;
        //for every input[i] in "daten"
        for (let i = 0; i < inputs.length; i++) {
            //if value/text in input is longer than 0
            if (0 < inputs[i].value.length) {
                //add 1 to let write
                write += 1;
            }
        }
        //if write is 6, create caption and p
        //>>all 6 input text have value longer than 0
        if (write == 6) {
            //create caption
            let caption = document.createElement("h3");
            //add innerText
            caption.innerText = "persönliche Daten:";
            //append caption to persData
            persData.appendChild(caption);
            //create p
            let p = createParagraph(persData);
            // \n is like <br>
            p.innerText = inputs[1].value + " " + inputs[0].value + "\n" + inputs[2].value + " " + inputs[3].value + "\n" + inputs[4].value + " " + inputs[5].value;
            persData.appendChild(p);
        }
        else {
            //if not all inputs have a value, delete innerText
            //get caption
            let caption = persData.firstChild;
            //drain it
            caption.innerText = "";
            //get p
            let p = persData.lastChild;
            //drain it
            p.innerText = "";
        }
    }
    //_____create <p> >> return paragraph:HTMLParagraphElement
    function createParagraph(_parent) {
        //create <p>
        let paragraph = document.createElement("p");
        //add attribute
        paragraph.setAttribute("location", "basket");
        //append <p> to parent
        _parent.appendChild(paragraph);
        //returns <p>
        return paragraph;
    }
})(wbk_99 || (wbk_99 = {}));
//# sourceMappingURL=main.js.map