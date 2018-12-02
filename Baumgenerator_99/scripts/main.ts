/* 
Aufgabe: 5
Name: Monetta Marchiano
Matrikel: 256063
Datum: 02.12.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace wbk_99 {

    document.addEventListener("DOMContentLoaded", init);

    function init(): void {
        createFieldsets(items);
        document.getElementsByTagName("body")[0].addEventListener("input", changeAttributes);

    }

    function createFieldsets(_items: HomoItem): void {
        let dynDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("dynamic");

        for (let key in items) {
            let value: HeteroItem[] = items[key];
            let parentFieldset = createFieldset(dynDiv, key);
            for (let i: number = 0; i < value.length; i++) {

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

    function createFieldset(_parent: HTMLElement, _name: string): HTMLFieldSetElement {
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");
        fieldset.id = "fieldset_" + _name;
        fieldset.setAttribute("location", "dyn");
        legend.innerText = _name;
        fieldset.appendChild(legend);
        _parent.appendChild(fieldset);

        return fieldset;
    }

    function createRadioButt(_fieldSet: HTMLFieldSetElement, _item: HeteroItem, _key: string): void {

        let radioButt: HTMLInputElement = document.createElement("input");
        radioButt.type = "radio";
        radioButt.value = _item.name;
        radioButt.name = "radioGroup_" + _key;
        radioButt.id = "radioButt_" + _item.name;

        radioButt.setAttribute("itemName", _item.name);
        radioButt.setAttribute("key", _key);
        radioButt.setAttribute("price", _item.price.toString());
        radioButt.setAttribute("show", "false");

        _fieldSet.appendChild(radioButt);

        let label: HTMLLabelElement = document.createElement("label");
        label.setAttribute("for", radioButt.id);
        label.innerHTML = _item.name;
        _fieldSet.appendChild(label);
    }

    function createStepper(_fieldSet: HTMLFieldSetElement, _item: HeteroItem, _key: string): void {

        let label: HTMLParagraphElement = document.createElement("p");
        label.innerHTML = _item.name;
        _fieldSet.appendChild(label);

        let stepper: HTMLInputElement = document.createElement("input");
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
    function changeAttributes(_event: Event): void {
        console.log("writeBas");
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.type == "radio") {
            let tempVal = items[target.getAttribute("key")];
            for (let i: number = 0; i < tempVal.length; i++) {
                let name: string = tempVal[i].name;
                let radio: HTMLInputElement = <HTMLInputElement>document.getElementById("radioButt_" + name);
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
    function writeBasket(): void {

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");

        let basketDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("basket");
        basketDiv.innerText = "";

        let caption: HTMLHeadingElement = document.createElement("h2");
        caption.innerText = "Bestellübersicht:";
        basketDiv.appendChild(caption);

        for (let i: number = 0; i < inputs.length; i++) {

            let input: HTMLInputElement = inputs[i];
            let attrName: string = input.getAttribute("itemName");
            let attrKey: string = input.getAttribute("key");
            let attrShow: string = input.getAttribute("show");
            let attrPrice: string = input.getAttribute("price");

            if (attrShow == "true") {
                let p: HTMLParagraphElement = createParagraph(basketDiv);
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
        let price: number = 0;

        let basketPs: NodeListOf<HTMLParagraphElement> = basketDiv.getElementsByTagName("p");
        for (let i: number = 0; i < basketPs.length; i++) {

            let singlePrice: number = parseFloat(basketPs[i].getAttribute("price"));
            let value: number = parseInt(basketPs[i].getAttribute("value"));
            price += (singlePrice * value);
        }

        let priceString: string = price.toString() + " €";
        let p: HTMLParagraphElement = createParagraph(basketDiv);
        p.innerText = "Gesamtpreis: " + priceString;
        p.style.textDecoration = "overline";

    }

    function createParagraph(_parent: HTMLDivElement): HTMLParagraphElement {
        let paragraph: HTMLParagraphElement = document.createElement("p")
        paragraph.setAttribute("location", "basket");
        _parent.appendChild(paragraph);
        return paragraph;
    }

    //namespace   
}