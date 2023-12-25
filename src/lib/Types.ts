export interface Product {
    productId: number;
    productName: string;
    productPrice: number;
    quantity: number;
    isInStock: boolean;
}

export interface ProductRequest {
    productName: string;
    productPrice: number;
    quantity: number;
    isInStock: boolean;
}

export interface Client {
    clientId: number;
    fullName: string;
    address: string;
    productId: number,
}

export interface ClientRequest {
    fullName: string;
    address: string;
}

export interface Sale {
    saleId: number;
    clientId: number;
    productId: number;
    quantity: number;
    saleDate: string;
    status: string;
    client: Client;
    product: Product;
}

export interface SaleRequest {
    clientId: number;
    productId: number;
    quantity: number;

}