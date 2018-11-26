declare namespace A05_wbk {
    interface HeteroItem {
        name: string;
        attr: string[];
        price: number[];
    }
    interface HomoItem {
        [key: string]: HeteroItem[];
    }
    let items: HomoItem;
}
