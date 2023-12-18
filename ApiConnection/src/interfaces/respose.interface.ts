
// Generated by https://quicktype.io

export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing"
}

export interface ProductCategory {
    name: Category,
    code: string
}

export interface Rating {
    rate:  number;
    count: number;
}

export interface ResultComponentProps {
    selectedCategory: Category | null
}

export interface ToastComponentProps {
    permissionToShowError: boolean
}
