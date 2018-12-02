/*
Aufgabe: 5
Name: Monetta Marchiano
Matrikel: 256063
Datum: 25.11.2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A06_wbk;
(function (A06_wbk) {
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        createFormElements();
        createDynamicBasket();
    }
    function createFormElements() {
        let dynamicDiv = document.getElementById("dynamic");
        //iteriert durch items, sozusagen wie viele keys
        //for every key in items do this
        //also für Baumart, Halterung, Beleuchtung....
        for (let key in A06_wbk.items) {
            //variable für das array zu dem key
            let value = A06_wbk.items[key];
            //creates filedset for every key =>parent Fieldset
            let parentFieldset = createFieldset(dynamicDiv, key);
            //creates table for every key
            let table = document.createElement("table");
            table.id = "table_" + key;
            parentFieldset.appendChild(table);
            //iteriert jwls durch die arrays der keys
            //also wenn der key Baumart ist, für jedes Objekt mit dem key baumart
            for (let i = 0; i < value.length; i++) {
                //create table row
                let parentRow = document.createElement("tr");
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
    function createRadioButt(_container, _itemName) {
        //for every butt a new table cell
        let tableData = document.createElement("td");
        tableData.id = "tableData_" + _itemName;
        //radioButt
        let radioButt = document.createElement("input");
        radioButt.type = "radio";
        radioButt.value = _itemName;
        radioButt.name = "radioGroup_" + _container.id;
        radioButt.id = "radioButt_" + _itemName;
        //append radio to table cell
        tableData.appendChild(radioButt);
        //label for radioButt
        let label = document.createElement("label");
        label.htmlFor = radioButt.id;
        label.innerHTML = _itemName;
        //append label to table cell
        tableData.appendChild(label);
        //append table cell to tablerow/_container
        _container.appendChild(tableData);
    }
    //creates checkbox
    function createCheckBox(_container, _itemName) {
        //for every butt a new table cell
        let tableData = document.createElement("td");
        tableData.id = "tableData_" + _itemName;
        //creates checkbox
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.value = _itemName;
        checkBox.name = "checkBox" + _itemName;
        checkBox.id = _container.id + "_checkBox_" + _itemName;
        //append box to table cell
        tableData.appendChild(checkBox);
        //label for checkbox
        let label = document.createElement("label");
        label.htmlFor = checkBox.id;
        label.innerHTML = _itemName;
        //append label to table cell
        tableData.appendChild(label);
        //append table cell to tablerow/_container
        _container.appendChild(tableData);
    }
    //creates selectBox
    function createSelectBox(_container, _itemName, _array) {
        //for every select a new table cell
        let tableData = document.createElement("td");
        tableData.id = "tableData_" + _itemName;
        //creates select
        let selectBox = document.createElement("select");
        selectBox.disabled = true;
        selectBox.name = "selectBox_" + _container.id;
        selectBox.id = "selectBox_" + _itemName;
        //append select to table cell
        tableData.appendChild(selectBox);
        //creates optionGroup
        let optGroup = document.createElement("optgroup");
        optGroup.label = _container.id;
        selectBox.appendChild(optGroup);
        //iteriert durch array (value[i].attr), also die farben
        for (let i = 0; i < _array.length; i++) {
            let opt = document.createElement("option");
            opt.innerText = _array[i];
            opt.id = "SelectOpt_" + _array[i];
            //append options to select
            selectBox.appendChild(opt);
        }
        //append table cell to tablerow/_container
        _container.appendChild(tableData);
    }
    //creates Stepper
    function createStepper(_container, _itemName, _min, _max, _step) {
        //for every stepper a new table cell
        let tableData = document.createElement("td");
        tableData.id = "tableData_" + _itemName;
        //create stepper
        let stepper = document.createElement("input");
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
    function createAddButt(_container, _itemName) {
        let tableData = document.createElement("td");
        tableData.id = "tableData_" + _itemName;
        let button = document.createElement("button");
        button.innerText = "add to basket";
        button.classList.add("addButt");
        button.id = "addButt_" + _itemName;
        button.addEventListener("click", changeItem);
        tableData.appendChild(button);
        _container.appendChild(tableData);
    }
    function createMinusItem(_container, _itemName) {
        let tableData = document.createElement("td");
        tableData.id = "tableData_" + _itemName;
        let button = document.createElement("button");
        button.innerText = "delete";
        button.classList.add("minusButt");
        button.id = "minusButt_" + _itemName;
        button.addEventListener("click", changeItem);
        tableData.appendChild(button);
        _container.appendChild(tableData);
    }
    //creates fieldSets
    function createFieldset(_parent, _key) {
        //create fieldset
        let fieldset = document.createElement("fieldset");
        //create legend
        let legend = document.createElement("legend");
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
    function createDynamicBasket() {
        let basketDiv = document.getElementById("basket");
        //create fieldset for warenkorb
        createFieldset(basketDiv, "Warenkorb");
        //create table for warenkorb
        let table = document.createElement("table");
        table.id = "basketTable";
        //append table to filedset "warenkorb"
        document.getElementById("Warenkorb").appendChild(table);
        //for every baskey in basket Items
        //baskey entspricht key | basketItems entspricht Items
        //same procedure wie oben
        for (let baskey in A06_wbk.basketItems) {
            let valueBasket = A06_wbk.basketItems[baskey];
            //create tableRow
            let captionRow = createTableRow(baskey);
            //cartion deklarieren
            let caption;
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
        let footerRow = createTableRow("Endpreis");
        //create static table cell for "Endpreis:"
        createBasketTableData("Endpreis:", footerRow, "footer", "caption");
        //create dynamic table cell for price
        //price = return von calsDynamicPrice
        let price = calcDynamicPrice();
        //price:number wird zu string
        let priceString = price.toString();
        //creates table cell for price
        createBasketTableData(priceString, footerRow, "footer", "price");
    }
    function createDynamicTableCells(_baskey, _valueBasket) {
        for (let i = 0; i < _valueBasket.length; i++) {
            let parentRow = createTableRow(_baskey + "_item" + i);
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
    function calcDynamicPrice() {
        let finalSum = 0;
        for (let baskey in A06_wbk.basketItems) {
            let valueBasket = A06_wbk.basketItems[baskey];
            for (let i = 0; i < valueBasket.length; i++) {
                let itemSum = valueBasket[i].num * valueBasket[i].price;
                finalSum = finalSum + itemSum;
            }
        }
        return finalSum;
    }
    //creates TableRow
    function createTableRow(_idName) {
        //get table by id
        let table = document.getElementById("basketTable");
        //create table row
        let tableRow = document.createElement("tr");
        tableRow.id = "tableRow_" + _idName;
        //append table row to table
        table.appendChild(tableRow);
        //returns tableRow
        return tableRow;
    }
    //creates TableCell with content for basket
    function createBasketTableData(_txt, _parent, _i, _baskey) {
        //creates table cell
        let tableData = document.createElement("td");
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
    function changeItem(_event) {
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
})(A06_wbk || (A06_wbk = {}));
//# sourceMappingURL=main.js.map