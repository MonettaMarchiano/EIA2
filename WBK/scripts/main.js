/*
Aufgabe: 6
Name: Monetta Marchiano
Matrikel: 256063
Datum: 02.12.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var wbk_reloaded;
(function (wbk_reloaded) {
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        createFieldsets(wbk_reloaded.items);
        document.getElementsByTagName("body")[0].addEventListener("input", writeBasket);
    }
    function createFieldsets(_items) {
        let dynDiv = document.getElementById("dynamic");
        for (let key in wbk_reloaded.items) {
            let value = wbk_reloaded.items[key];
            let parentFieldset = createFieldset(dynDiv, key);
            for (let i = 0; i < value.length; i++) {
                switch (key) {
                    case ("Baumart"):
                    case ("Halterung"):
                    case ("Lieferung"):
                    case ("Lieferdienst"):
                    case ("Lieferart"):
                        createRadioButt(parentFieldset, value[i].name);
                        break;
                    case ("Beleuchtung"):
                    case ("Glaskugeln"):
                    case ("Schmuck"):
                        createStepper(parentFieldset, value[i].name);
                        break;
                }
            }
        }
    }
    function writeBasket() {
        let basDiv = document.getElementById("basket");
    }
    function createFieldset(_parent, _name) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        fieldset.id = _name;
        legend.innerText = _name;
        fieldset.appendChild(legend);
        _parent.appendChild(fieldset);
        return fieldset;
    }
    function createRadioButt(_fieldSet, _itemName) {
        let radioButt = document.createElement("input");
        radioButt.type = "radio";
        radioButt.value = _itemName;
        radioButt.name = "radioButt" + _itemName;
        radioButt.id = _fieldSet.id + "_radioButt_" + _itemName;
        _fieldSet.appendChild(radioButt);
        let label = document.createElement("label");
        label.htmlFor = radioButt.id;
        label.innerHTML = _itemName;
        _fieldSet.appendChild(label);
    }
    function createStepper(_fieldSet, _itemName) {
        let label = document.createElement("p");
        label.innerHTML = _itemName;
        _fieldSet.appendChild(label);
        let stepper = document.createElement("input");
        stepper.type = "number";
        stepper.min = "0";
        stepper.max = "20";
        stepper.step = "1";
        stepper.id = _itemName + "_stepper";
        _fieldSet.appendChild(stepper);
    }
})(wbk_reloaded || (wbk_reloaded = {}));
//# sourceMappingURL=main.js.map