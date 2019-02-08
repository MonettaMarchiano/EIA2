/* 
Aufgabe: 4
Name: Monetta Marchiano
Matrikel: 256063
Datum: 18.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A04_wbk {

    document.addEventListener("DOMContentLoaded", init);
    window.addEventListener("change", dynamicBasket);

    function init(): void {
        createFormElements();
    }

    function createFormElements(): void {
        let container: NodeListOf<Element> = document.getElementsByClassName("container");
        for (let i: number = 0; i < container.length; i++) {
            let tempContainer: Element = container[i];
            createHeading(container[i]);
            for (let j: number = 0; j < items.length; j++) {
                if (tempContainer.id == items[j].art) {
                    switch (items[j].art) {
                        case ("baumart"):
                            createRadioButt(tempContainer, items[j].name);
                            break;
                        case ("halterung"):
                            createRadioButt(tempContainer, items[j].name);
                            break;
                        case ("beleuchtung"):
                            createRadioButt(tempContainer, items[j].name);
                            createStepper(tempContainer, items[j].name, "0", "100", "20");
                            createSelect(tempContainer, items[j].name, items[j].add, "farbe/material");
                            break;
                        case ("schmuck"):
                            createCheckBox(tempContainer, items[j].name);
                            createStepper(tempContainer, items[j].name, "0", "30", "5");
                            createSelect(tempContainer, items[j].name, items[j].add, "farbe/material");
                            break;
                        case ("bio-schmuck"):
                            createRadioButt(tempContainer, items[j].name);
                            createStepper(tempContainer, items[j].name, "0", "30", "3");
                            break;
                        case ("spitze"):
                            createRadioButt(tempContainer, items[j].name);
                            if (items[j].name == "engel" || items[j].name == "stern") {
                                createSelect(tempContainer, items[j].name, items[j].add, "farbe/material");
                            }
                            break;

                        case ("lieferung"):
                            createRadioButt(tempContainer, items[j].name);
                            createSelect(tempContainer, items[j].name, items[j].add, "lieferzeit");
                            break;
                    }
                    if (items[j].art != "baumart" && items[j].art != "halterung") {
                        createBreak(tempContainer);
                    }
                }
            }
        }
    }

    function createRadioButt(_container: Element, _itemName: string): void {
        let radioButt: HTMLInputElement = document.createElement("input");
        radioButt.type = "radio";
        radioButt.value = _itemName;
        radioButt.name = "radioButt" + _itemName;
        radioButt.id = _container.id + "_radioButt_" + _itemName;
        _container.appendChild(radioButt);
        let label: HTMLLabelElement = document.createElement("label");
        label.htmlFor = radioButt.id;
        label.innerHTML = _itemName;
        _container.appendChild(label);
    }

    function createCheckBox(_container: Element, _itemName: string): void {
        let checkBox: HTMLInputElement = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.value = _itemName;
        checkBox.name = "checkBox" + _itemName;
        checkBox.id = _container.id + "_checkBox_" + _itemName;
        _container.appendChild(checkBox);

        let label: HTMLLabelElement = document.createElement("label");
        label.htmlFor = checkBox.id;
        label.innerHTML = _itemName;
        _container.appendChild(label);
    }

    function createSelect(_container: Element, _itemName: string, _itemAdd: string, _whatsAdd: string): void {

        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "selectBox" + _itemAdd;
        selectBox.id = _container.id + "_selectBox_" + _itemName + _whatsAdd;
        _container.appendChild(selectBox);
        /*
        let label: HTMLLabelElement = document.createElement("label");
        label.htmlFor = selectBox.id;
        label.innerHTML = _whatsAdd;
        _container.appendChild(label);
        */
        let optGroup: HTMLOptGroupElement = document.createElement("optgroup");
        optGroup.label = _whatsAdd;
        selectBox.appendChild(optGroup);
        let itemAddArray: string[] = _itemAdd.split("|");
        for (let i: number = 0; i < itemAddArray.length; i++) {
            let opt: HTMLOptionElement = document.createElement("option");
            opt.innerText = itemAddArray[i];
            opt.id = "SelectOpt_" + itemAddArray[i];
            opt.value = itemAddArray[i];
            selectBox.appendChild(opt);
        }
    }


    function createStepper(_container: Element, _itemName: string, _min: string, _max: string, _step: string): void {
        let stepper: HTMLInputElement = document.createElement("input");
        stepper.type = "number";
        stepper.min = _min;
        stepper.max = _max;
        stepper.step = _step;
        stepper.id = _container.id + _itemName + "_stepper";
        _container.appendChild(stepper);
    }

    function createBreak(_container: Element): void {
        let br: HTMLBRElement = document.createElement("br");
        _container.appendChild(br);
    }

    function createHeading(_container: Element): void {
        let h: HTMLHeadingElement = document.createElement("h4");
        h.innerText = _container.id;
        _container.appendChild(h);
    }
    function dynamicBasket(): void {
    }
    //namespace
}