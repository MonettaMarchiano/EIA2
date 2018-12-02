declare namespace wbk_99 {
    interface HeteroItem {
        name: string;
        price: number;
    }
    interface HomoItem {
        [key: string]: HeteroItem[];
    }
    let items: HomoItem;
}
