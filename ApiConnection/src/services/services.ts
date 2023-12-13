import { Product } from "../interfaces/respose.interface";

export async function getProducts() {

    try {
       const productsRequest = await fetch("https://fakestoreapi.com/products");
       const productList: Product[] = await productsRequest.json();
       return productList;
    } catch (error) {
       console.log(error);
    }

}

export async function getProductsByID(productId: number) {

    try {
       const productRequest = await fetch(`https://fakestoreapi.com/products/${productId}`);
       const product: Product = await productRequest.json();
       return product;
    } catch (error) {
       console.log(error);
    }
}

export async function getProductsByCategory(category: string) {

    try {
        const productRequestByCategory = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const productList: Product[] = await productRequestByCategory.json();
        return productList;
    } catch (error) {
        console.log(error);
    }
}
