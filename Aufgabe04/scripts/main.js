/*
Aufgabe: 4
Name: Monetta Marchiano
Matrikel: 256063
Datum: 18.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A04_wbk;
(function (A04_wbk) {
    document.addEventListener("DOMContentLoaded", init);
    window.addEventListener("change", dynamicBasket);
    function init() {
        createFormElements();
    }
    function createFormElements() {
        let container = document.getElementsByClassName("container");
        for (let i = 0; i < container.length; i++) {
            let tempContainer = container[i];
            createHeading(container[i]);
            for (let j = 0; j < A04_wbk.items.length; j++) {
                if (tempContainer.id == A04_wbk.items[j].art) {
                    switch (A04_wbk.items[j].art) {
                        case ("baumart"):
                            createRadioButt(tempContainer, A04_wbk.items[j].name);
                            break;
                        case ("halterung"):
                            createRadioButt(tempContainer, A04_wbk.items[j].name);
                            break;
                        case ("beleuchtung"):
                            createRadioButt(tempContainer, A04_wbk.items[j].name);
                            createStepper(tempContainer, A04_wbk.items[j].name, "0", "100", "20");
                            createSelect(tempContainer, A04_wbk.items[j].name, A04_wbk.items[j].add, "farbe/material");
                            break;
                        case ("schmuck"):
                            createCheckBox(tempContainer, A04_wbk.items[j].name);
                            createStepper(tempContainer, A04_wbk.items[j].name, "0", "30", "5");
                            createSelect(tempContainer, A04_wbk.items[j].name, A04_wbk.items[j].add, "farbe/material");
                            break;
                        case ("bio-schmuck"):
                            createRadioButt(tempContainer, A04_wbk.items[j].name);
                            createStepper(tempContainer, A04_wbk.items[j].name, "0", "30", "3");
                            break;
                        case ("spitze"):
                            createRadioButt(tempContainer, A04_wbk.items[j].name);
                            if (A04_wbk.items[j].name == "engel" || A04_wbk.items[j].name == "stern") {
                                createSelect(tempContainer, A04_wbk.items[j].name, A04_wbk.items[j].add, "farbe/material");
                            }
                            break;
                        case ("lieferung"):
                            createRadioButt(tempContainer, A04_wbk.items[j].name);
                            createSelect(tempContainer, A04_wbk.items[j].name, A04_wbk.items[j].add, "lieferzeit");
                            break;
                    }
                    if (A04_wbk.items[j].art != "baumart" && A04_wbk.items[j].art != "halterung") {
                        createBreak(tempContainer);
                    }
                }
            }
        }
    }
    function createRadioButt(_container, _itemName) {
        let radioButt = document.createElement("input");
        radioButt.type = "radio";
        radioButt.value = _itemName;
        radioButt.name = "radioButt" + _itemName;
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
    function createSelect(_container, _itemName, _itemAdd, _whatsAdd) {
        let selectBox = document.createElement("select");
        selectBox.name = "selectBox" + _itemAdd;
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
        let itemAddArray = _itemAdd.split("|");
        for (let i = 0; i < itemAddArray.length; i++) {
            let opt = document.createElement("option");
            opt.innerText = itemAddArray[i];
            opt.id = "SelectOpt_" + itemAddArray[i];
            opt.value = itemAddArray[i];
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
    function createBreak(_container) {
        let br = document.createElement("br");
        _container.appendChild(br);
    }
    function createHeading(_container) {
        let h = document.createElement("h4");
        h.innerText = _container.id;
        _container.appendChild(h);
    }
    function dynamicBasket() {
    }
})(A04_wbk || (A04_wbk = {}));
//# sourceMappingURL=main.js.map