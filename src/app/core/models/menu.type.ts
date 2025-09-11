export interface Menu {
    name: string;
    image: string;
    price: number;
    composition: MenuComposition;
}

export interface MenuComposition {
    main?: string;
    drink?: string;
    side?: string[];
}
