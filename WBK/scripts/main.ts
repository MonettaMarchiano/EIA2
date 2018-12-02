/* 
Aufgabe: 6
Name: Monetta Marchiano
Matrikel: 256063
Datum: 02.12.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace wbk_reloaded {

    document.addEventListener("DOMContentLoaded", init);


    function init(): void {
        createFieldsets(items);
        document.getElementsByTagName("body")[0].addEventListener("input", writeBasket);
    }

    function createFieldsets(_items: HomoItem): void {
        let dynDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("dynamic");

        for (let key in items) {
            let value: HeteroItem[] = items[key];
            let parentFieldset: HTMLFieldSetElement = createFieldset (dynDiv, key);
            for (let i: number = 0; i < value.length; i++) {

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

    function writeBasket(): void {
        let basDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("basket");

        
    }

    function createFieldset(_parent: HTMLElement, _name: string): HTMLFieldSetElement {

        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");
        fieldset.id = _name;
        legend.innerText = _name;
        fieldset.appendChild(legend);
        _parent.appendChild(fieldset);

        return fieldset;
    }

    function createRadioButt(_fieldSet: HTMLFieldSetElement, _itemName: string): void {

        let radioButt: HTMLInputElement = document.createElement("input");
        radioButt.type = "radio";
        radioButt.value = _itemName;
        radioButt.name = "radioButt" + _itemName;
        radioButt.id = _fieldSet.id + "_radioButt_" + _itemName;
        _fieldSet.appendChild(radioButt);

        let label: HTMLLabelElement = document.createElement("label");
        label.htmlFor = radioButt.id;
        label.innerHTML = _itemName;
        _fieldSet.appendChild(label);
    }

    function createStepper(_fieldSet: HTMLFieldSetElement, _itemName: string): void {

        let label: HTMLParagraphElement = document.createElement("p");
        label.innerHTML = _itemName;
        _fieldSet.appendChild(label);


        let stepper: HTMLInputElement = document.createElement("input");
        stepper.type = "number";
        stepper.min = "0";
        stepper.max = "20";
        stepper.step = "1";
        stepper.id = _itemName + "_stepper";
        _fieldSet.appendChild(stepper);
    }

    //namespace   
}