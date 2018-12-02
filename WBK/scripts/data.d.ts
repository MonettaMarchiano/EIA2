declare namespace wbk_reloaded {
    interface HeteroItem {
        name: string;
        price: number;
    }
    interface HomoItem {
        [key: string]: HeteroItem[];
    }
    let items: HomoItem;
}
