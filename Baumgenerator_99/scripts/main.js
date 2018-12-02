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
    function init() {
        createFieldsets(wbk_99.items);
        document.getElementsByTagName("body")[0].addEventListener("input", changeAttributes);
    }
    function createFieldsets(_items) {
        let dynDiv = document.getElementById("dynamic");
        for (let key in wbk_99.items) {
            let value = wbk_99.items[key];
            let parentFieldset = createFieldset(dynDiv, key);
            for (let i = 0; i < value.length; i++) {
                switch (key) {
                    case ("Baumart"):
                    case ("Halterung"):
                    case ("Lieferdienst"):
                    case ("Lieferart"):
                        createRadioButt(parentFieldset, value[i], key);
                        break;
                    case ("Beleuchtung"):
                    case ("Glaskugeln"):
                    case ("Schmuck"):
                        createStepper(parentFieldset, value[i], key);
                        break;
                }
            }
        }
    }
    function createFieldset(_parent, _name) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        fieldset.id = "fieldset_" + _name;
        fieldset.setAttribute("location", "dyn");
        legend.innerText = _name;
        fieldset.appendChild(legend);
        _parent.appendChild(fieldset);
        return fieldset;
    }
    function createRadioButt(_fieldSet, _item, _key) {
        let radioButt = document.createElement("input");
        radioButt.type = "radio";
        radioButt.value = _item.name;
        radioButt.name = "radioGroup_" + _key;
        radioButt.id = "radioButt_" + _item.name;
        radioButt.setAttribute("itemName", _item.name);
        radioButt.setAttribute("key", _key);
        radioButt.setAttribute("price", _item.price.toString());
        radioButt.setAttribute("show", "false");
        _fieldSet.appendChild(radioButt);
        let label = document.createElement("label");
        label.setAttribute("for", radioButt.id);
        label.innerHTML = _item.name;
        _fieldSet.appendChild(label);
    }
    function createStepper(_fieldSet, _item, _key) {
        let label = document.createElement("p");
        label.innerHTML = _item.name;
        _fieldSet.appendChild(label);
        let stepper = document.createElement("input");
        stepper.type = "number";
        stepper.min = "0";
        stepper.max = "20";
        stepper.step = "1";
        stepper.id = "stepper_" + _item.name;
        stepper.setAttribute("itemName", _item.name);
        stepper.setAttribute("key", _key);
        stepper.setAttribute("price", _item.price.toString());
        stepper.setAttribute("show", "false");
        _fieldSet.appendChild(stepper);
    }
    // change Event function
    function changeAttributes(_event) {
        console.log("writeBas");
        let target = _event.target;
        if (target.type == "radio") {
            let tempVal = wbk_99.items[target.getAttribute("key")];
            for (let i = 0; i < tempVal.length; i++) {
                let name = tempVal[i].name;
                let radio = document.getElementById("radioButt_" + name);
                radio.setAttribute("show", "false");
            }
        }
        else if (target.type == "number" && target.value == "0") {
            target.setAttribute("show", "false");
        }
        target.setAttribute("show", "true");
        writeBasket();
    }
    // creates p's in basket & fills them
    function writeBasket() {
        let inputs = document.getElementsByTagName("input");
        let basketDiv = document.getElementById("basket");
        basketDiv.innerText = "";
        let caption = document.createElement("h2");
        caption.innerText = "Bestellübersicht:";
        basketDiv.appendChild(caption);
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let attrName = input.getAttribute("itemName");
            let attrKey = input.getAttribute("key");
            let attrShow = input.getAttribute("show");
            let attrPrice = input.getAttribute("price");
            if (attrShow == "true") {
                let p = createParagraph(basketDiv);
                p.setAttribute("price", attrPrice);
                if (input.type == "radio") {
                    p.innerText = "1x " + attrName + " à " + attrPrice + " €";
                    p.setAttribute("value", "1");
                }
                else if (input.type == "number") {
                    p.innerText = input.value + "x " + attrName + " à " + attrPrice + " €";
                    p.setAttribute("value", input.value);
                }
            }
        }
        // calc Endpreis
        let price = 0;
        let basketPs = basketDiv.getElementsByTagName("p");
        for (let i = 0; i < basketPs.length; i++) {
            let singlePrice = parseFloat(basketPs[i].getAttribute("price"));
            let value = parseInt(basketPs[i].getAttribute("value"));
            price += (singlePrice * value);
        }
        let priceString = price.toString() + " €";
        let p = createParagraph(basketDiv);
        p.innerText = "Gesamtpreis: " + priceString;
        p.style.textDecoration = "overline";
    }
    function createParagraph(_parent) {
        let paragraph = document.createElement("p");
        paragraph.setAttribute("location", "basket");
        _parent.appendChild(paragraph);
        return paragraph;
    }
})(wbk_99 || (wbk_99 = {}));
//# sourceMappingURL=main.js.map