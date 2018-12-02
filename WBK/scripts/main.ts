/* 
Aufgabe: 5
Name: Monetta Marchiano
Matrikel: 256063
Datum: 25.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A06_wbk {

    document.addEventListener("DOMContentLoaded", init);


    function init(): void {
        createFormElements();
        createDynamicBasket();
    }

    function createFormElements(): void {
        let dynamicDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("dynamic");
        //iteriert durch items, sozusagen wie viele keys
        //for every key in items do this
        //also für Baumart, Halterung, Beleuchtung....
        for (let key in items) {
            //variable für das array zu dem key
            let value: HeteroItem[] = items[key];
            //creates filedset for every key =>parent Fieldset
            let parentFieldset: HTMLFieldSetElement = createFieldset(dynamicDiv, key);
            //creates table for every key
            let table: HTMLTableElement = document.createElement("table");
            table.id = "table_" + key;
            parentFieldset.appendChild(table);

            //iteriert jwls durch die arrays der keys
            //also wenn der key Baumart ist, für jedes Objekt mit dem key baumart
            for (let i: number = 0; i < value.length; i++) {
                //create table row
                let parentRow: HTMLTableRowElement = document.createElement("tr");
                parentRow.id = "tableRow_" + value[i].name;
                table.appendChild(parentRow);

                switch (key) {
                    case ("Baumart"):
                    case ("Halterung"):
                        createRadioButt(parentRow, value[i].name);
                        break;
                    case ("Beleuchtung"):
                    case ("Baumschmuck"):
                        createCheckBox(parentRow, value[i].name);
                        createSelectBox(parentRow, value[i].name, value[i].attr);
                        createStepper(parentRow, value[i].name, "0", "1", "20");
                        createAddButt(parentRow, value[i].name);
                        break;
                    case ("Lieferung"):
                        createRadioButt(parentRow, value[i].name);
                        createSelectBox(parentRow, value[i].name, value[i].attr);
                        break;
                }
            }
        }
    }

    //creates radioButts
    function createRadioButt(_container: HTMLElement, _itemName: string): void {

        //for every butt a new table cell
        let tableData: HTMLTableDataCellElement = document.createElement("td");
        tableData.id = "tableData_" + _itemName;

        //radioButt
        let radioButt: HTMLInputElement = document.createElement("input");
        radioButt.type = "radio";
        radioButt.value = _itemName;
        radioButt.name = "radioGroup_" + _container.id;
        radioButt.id = "radioButt_" + _itemName;

        //append radio to table cell
        tableData.appendChild(radioButt);

        //label for radioButt
        let label: HTMLLabelElement = document.createElement("label");
        label.htmlFor = radioButt.id;
        label.innerHTML = _itemName;

        //append label to table cell
        tableData.appendChild(label);

        //append table cell to tablerow/_container
        _container.appendChild(tableData);
    }

    //creates checkbox
    function createCheckBox(_container: HTMLElement, _itemName: string): void {

        //for every butt a new table cell
        let tableData: HTMLTableDataCellElement = document.createElement("td");
        tableData.id = "tableData_" + _itemName;

        //creates checkbox
        let checkBox: HTMLInputElement = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.value = _itemName;
        checkBox.name = "checkBox" + _itemName;
        checkBox.id = _container.id + "_checkBox_" + _itemName;

        //append box to table cell
        tableData.appendChild(checkBox);

        //label for checkbox
        let label: HTMLLabelElement = document.createElement("label");
        label.htmlFor = checkBox.id;
        label.innerHTML = _itemName;

        //append label to table cell
        tableData.appendChild(label);

        //append table cell to tablerow/_container
        _container.appendChild(tableData);

    }

    //creates selectBox
    function createSelectBox(_container: HTMLElement, _itemName: string, _array: string[]): void {

        //for every select a new table cell
        let tableData: HTMLTableDataCellElement = document.createElement("td");
        tableData.id = "tableData_" + _itemName;

        //creates select
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.disabled = true;
        selectBox.name = "selectBox_" + _container.id;
        selectBox.id = "selectBox_" + _itemName;

        //append select to table cell
        tableData.appendChild(selectBox);

        //creates optionGroup
        let optGroup: HTMLOptGroupElement = document.createElement("optgroup");
        optGroup.label = _container.id;
        selectBox.appendChild(optGroup);

        //iteriert durch array (value[i].attr), also die farben
        for (let i: number = 0; i < _array.length; i++) {
            let opt: HTMLOptionElement = document.createElement("option");
            opt.innerText = _array[i];
            opt.id = "SelectOpt_" + _array[i];

            //append options to select
            selectBox.appendChild(opt);
        }

        //append table cell to tablerow/_container
        _container.appendChild(tableData);

    }

    //creates Stepper
    function createStepper(_container: HTMLElement, _itemName: string, _min: string, _max: string, _step: string): void {

        //for every stepper a new table cell
        let tableData: HTMLTableDataCellElement = document.createElement("td");
        tableData.id = "tableData_" + _itemName;

        //create stepper
        let stepper: HTMLInputElement = document.createElement("input");
        stepper.type = "number";
        stepper.min = _min;
        stepper.max = _max;
        stepper.step = _step;
        stepper.id = "stepper_" + _itemName;

        //append stepper to table cell
        tableData.appendChild(stepper);

        //append table cell to tablerow/_container
        _container.appendChild(tableData);
    }

    function createAddButt(_container: HTMLElement, _itemName: string): void {
        let tableData: HTMLTableDataCellElement = document.createElement("td");
        tableData.id = "tableData_" + _itemName;
        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "add to basket";
        button.classList.add("addButt");
        button.id = "addButt_" + _itemName;
        button.addEventListener("click", changeItem);
        tableData.appendChild(button);
        _container.appendChild(tableData);
    }

    function createMinusItem(_container: HTMLElement, _itemName: string): void {
        let tableData: HTMLTableDataCellElement = document.createElement("td");
        tableData.id = "tableData_" + _itemName;
        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "delete";
        button.classList.add("minusButt");
        button.id = "minusButt_" + _itemName;
        button.addEventListener("click", changeItem);
        tableData.appendChild(button);
        _container.appendChild(tableData);
    }

    //creates fieldSets
    function createFieldset(_parent: HTMLElement, _key: string): HTMLFieldSetElement {
        //create fieldset
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        //create legend
        let legend: HTMLLegendElement = document.createElement("legend");
        fieldset.id = _key;
        legend.innerText = _key;
        //append legend to fieldset
        fieldset.appendChild(legend);
        //append fieldset to parent
        _parent.appendChild(fieldset);

        //returns created fieldset
        return fieldset;
    }



    //_______________    


    function createDynamicBasket(): void {
        let basketDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("basket");

        //create fieldset for warenkorb
        createFieldset(basketDiv, "Warenkorb");

        //create table for warenkorb
        let table: HTMLTableElement = document.createElement("table");
        table.id = "basketTable";

        //append table to filedset "warenkorb"
        document.getElementById("Warenkorb").appendChild(table);

        //for every baskey in basket Items
        //baskey entspricht key | basketItems entspricht Items
        //same procedure wie oben
        for (let baskey in basketItems) {
            let valueBasket: BasketHeteroItem[] = basketItems[baskey];
            //create tableRow
            let captionRow: HTMLTableRowElement = createTableRow(baskey);
            //cartion deklarieren
            let caption: string;
            switch (baskey) {

                case ("Baumart"):
                    //caption mit wert befüllen
                    caption = "Baumart:";
                    break;

                case ("Halterung"):
                    caption = "Halterung:";
                    break;

                case ("Beleuchtung"):
                    caption = "Dein Beleuchtungs-Paket:";
                    break;

                case ("Baumschmuck"):
                    caption = "Dein Baumschmuck-Paket:";
                    break;

                case ("Lieferung"):
                    caption = "Deine Lieferoptionen:";
                    break;
            }

            //create tableCell (capton isst hier parameter)
            createBasketTableData(caption, captionRow, "caption", baskey);

            //dynamischeTabeCells
            createDynamicTableCells(baskey, valueBasket);
        }

        //außerhalb des loops, wird nur einmal gemacht
        //footerRow
        let footerRow: HTMLTableRowElement = createTableRow("Endpreis");

        //create static table cell for "Endpreis:"
        createBasketTableData("Endpreis:", footerRow, "footer", "caption");

        //create dynamic table cell for price
        //price = return von calsDynamicPrice
        let price: number = calcDynamicPrice();
        //price:number wird zu string
        let priceString: string = price.toString();
        //creates table cell for price
        createBasketTableData(priceString, footerRow, "footer", "price");
    }

    function createDynamicTableCells(_baskey: string, _valueBasket: BasketHeteroItem[]): void {
        for (let i: number = 0; i < _valueBasket.length; i++) {
            let parentRow: HTMLTableRowElement = createTableRow(_baskey + "_item" + i);
            switch (_baskey) {
                case ("Baumart"):
                case ("Halterung"):
                    createBasketTableData("1x ", parentRow, i + "a", _baskey);
                    createBasketTableData(_valueBasket[i].name, parentRow, i + "c", _baskey);
                    createBasketTableData(" ", parentRow, i + "b", _baskey);
                    createBasketTableData((_valueBasket[i].num * _valueBasket[i].price) + " €", parentRow, i + "d", _baskey);
                    break;
                case ("Beleuchtung"):
                case ("Baumschmuck"):
                    createBasketTableData(_valueBasket[i].num + "x ", parentRow, i + "a", _baskey);
                    createBasketTableData(_valueBasket[i].name, parentRow, i + "b", _baskey);
                    createBasketTableData("in Variante " + _valueBasket[i].attr, parentRow, i + "c", _baskey);
                    createBasketTableData((_valueBasket[i].num * _valueBasket[i].price) + " €", parentRow, i + "d", _baskey);
                    break;
                case ("Lieferung"):
                    createBasketTableData(" ", parentRow, i + "b", _baskey);
                    createBasketTableData(_valueBasket[i].name, parentRow, i + "a", _baskey);
                    createBasketTableData("per " + _valueBasket[i].attr, parentRow, i + "c", _baskey);
                    createBasketTableData(_valueBasket[i].price + " €", parentRow, i + "d", _baskey);
                    break;
            }
        }
    }

    //
    function calcDynamicPrice(): number {
        let finalSum: number = 0;
        for (let baskey in basketItems) {
            let valueBasket: BasketHeteroItem[] = basketItems[baskey];
            for (let i: number = 0; i < valueBasket.length; i++) {
                let itemSum: number = valueBasket[i].num * valueBasket[i].price;
                finalSum = finalSum + itemSum;
            }
        }
        return finalSum;
    }

    //creates TableRow
    function createTableRow(_idName: string): HTMLTableRowElement {

        //get table by id
        let table: HTMLTableElement = <HTMLTableElement>document.getElementById("basketTable");

        //create table row
        let tableRow: HTMLTableRowElement = document.createElement("tr");
        tableRow.id = "tableRow_" + _idName;

        //append table row to table
        table.appendChild(tableRow);

        //returns tableRow
        return tableRow;
    }

    //creates TableCell with content for basket
    function createBasketTableData(_txt: string, _parent: HTMLElement, _i: string, _baskey: string): void {
        //creates table cell
        let tableData: HTMLTableDataCellElement = document.createElement("td");

        switch (_i) {
            //when _i is caption, for underlined captions & needed colspan
            case ("caption"):
                tableData.id = "tableData_" + _i + "_" + _baskey;
                tableData.style.textDecoration = "underline";
                tableData.colSpan = 4;
                break;
            //when _i is footer, for overlined captions & needed colspan |=für gesamtpreis
            case ("footer"):
                tableData.id = "tableData_" + _i + "_" + _baskey;
                if (_baskey == "caption") {
                    tableData.colSpan = 3;
                    tableData.style.textDecoration = "overline";
                }
                else {
                    tableData.style.textDecoration = "overline";
                }
                break;
            //defalt is most used
            default:
                tableData.id = "tableData_" + _baskey + "_" + _i;
                break;
        }
        tableData.innerText = _txt;
        _parent.appendChild(tableData);
    }

    function changeItem(_event: MouseEvent): void {
        //event tar    
        //add
        //auf irgendein parent zugreifen oder id
        //daten auslesen und in basketItems
        //create new line mit add über dem alten
        //beim alten change add to subtr. butt
        //createDynBas    
        //subtr
        //löschen aus basketItems
        //zeile löschen
        //createDynBas     
    }

    //namespace
}