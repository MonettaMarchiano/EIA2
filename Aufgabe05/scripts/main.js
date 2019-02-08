/*
Aufgabe: 5
Name: Monetta Marchiano
Matrikel: 256063
Datum: 25.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A05_wbk;
(function (A05_wbk) {
    document.addEventListener("DOMContentLoaded", init);
    window.addEventListener("change", dynamicBasket);
    function init() {
        createFormElements(A05_wbk.items);
    }
    function createFormElements(_item) {
        let parentDiv = document.getElementById("dynamic");
        for (let key in _item) {
            let value = _item[key];
            createFieldset(parentDiv, key);
            for (let i = 0; i < value.length; i++) {
                let parentFieldset = document.getElementById(key);
                switch (key) {
                    case ("baumart"):
                        createRadioButt(parentFieldset, value[i].name);
                        break;
                    case ("halterung"):
                        createRadioButt(parentFieldset, value[i].name);
                        break;
                    case ("beleuchtung"):
                        createCheckBox(parentFieldset, value[i].name);
                        createStepper(parentFieldset, value[i].name, "0", "100", "20");
                        createSelect(parentFieldset, value[i].name, value[i].attr, "farbe/material");
                        break;
                    case ("baumschmuck"):
                        createCheckBox(parentFieldset, value[i].name);
                        createStepper(parentFieldset, value[i].name, "0", "30", "5");
                        createSelect(parentFieldset, value[i].name, value[i].attr, "farbe/material");
                        break;
                    case ("lieferung"):
                        createRadioButt(parentFieldset, value[i].name);
                        createSelect(parentFieldset, value[i].name, value[i].attr, "lieferzeit");
                        break;
                }
                if (key != "baumart" && key != "halterung") {
                    createBreak(parentFieldset);
                }
            }
        }
    }
    function createRadioButt(_container, _itemName) {
        let radioButt = document.createElement("input");
        radioButt.type = "radio";
        radioButt.value = _itemName;
        radioButt.name = "radioGroup_" + _container.id;
        radioButt.id = _container.id + "_radioButt_" + _itemName;
        _container.appendChild(radioButt);
        let label = document.createElement("label");
        label.htmlFor = radioButt.id;
        label.innerHTML = _itemName;
        _container.appendChild(label);
    }
    function createCheckBox(_container, _itemName) {
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.value = _itemName;
        checkBox.name = "checkBox" + _itemName;
        checkBox.id = _container.id + "_checkBox_" + _itemName;
        _container.appendChild(checkBox);
        let label = document.createElement("label");
        label.htmlFor = checkBox.id;
        label.innerHTML = _itemName;
        _container.appendChild(label);
    }
    function createSelect(_container, _itemName, _itemAttrArray, _whatsAdd) {
        let selectBox = document.createElement("select");
        selectBox.name = "selectBox" + _itemName;
        selectBox.id = _container.id + "_selectBox_" + _itemName + _whatsAdd;
        _container.appendChild(selectBox);
        /*
        let label: HTMLLabelElement = document.createElement("label");
        label.htmlFor = selectBox.id;
        label.innerHTML = _whatsAdd;
        _container.appendChild(label);
        */
        let optGroup = document.createElement("optgroup");
        optGroup.label = _whatsAdd;
        selectBox.appendChild(optGroup);
        for (let i = 0; i < _itemAttrArray.length; i++) {
            let opt = document.createElement("option");
            opt.innerText = _itemAttrArray[i];
            opt.id = "SelectOpt_" + _itemAttrArray[i];
            opt.value = _itemAttrArray[i];
            selectBox.appendChild(opt);
        }
    }
    function createStepper(_container, _itemName, _min, _max, _step) {
        let stepper = document.createElement("input");
        stepper.type = "number";
        stepper.min = _min;
        stepper.max = _max;
        stepper.step = _step;
        stepper.id = _container.id + _itemName + "_stepper";
        _container.appendChild(stepper);
    }
    function createItemSubmit(_container) {
        let button = document.createElement("button");
        button.innerText = "";
        button.id = "";
        button.addEventListener("click", addToBasket);
    }
    function createBreak(_container) {
        let br = document.createElement("br");
        _container.appendChild(br);
    }
    function createFieldset(_parent, _key) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        fieldset.id = _key;
        legend.innerText = _key;
        fieldset.appendChild(legend);
        _parent.appendChild(fieldset);
    }
    function dynamicBasket() {
        let basketDiv = document.getElementById("warenkorbText");
    }
    function addToBasket(_event) {
    }
})(A05_wbk || (A05_wbk = {}));
//# sourceMappingURL=main.js.map