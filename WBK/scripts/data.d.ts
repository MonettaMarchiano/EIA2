declare namespace A06_wbk {
    interface HeteroItem {
        name: string;
        attr: string[];
        price: number[];
    }
    interface HomoItem {
        [key: string]: HeteroItem[];
    }
    let items: HomoItem;
    interface BasketHeteroItem {
        name: string;
        attr: string;
        num: number;
        price: number;
    }
    interface BasketHomoItem {
        [baskey: string]: BasketHeteroItem[];
    }
    let basketItems: BasketHomoItem;
}
