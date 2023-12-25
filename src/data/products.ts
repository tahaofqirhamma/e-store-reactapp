import axios from "axios";
import { Product, ProductRequest } from "../lib/Types";

export const getProducts = async () => {
    try {
        const response = await fetch(
            "http://localhost:8888/PRODUCT-SERVICE/api/v1/products"
        );
        const result = response.json();
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const getProduct = async (id: number) => {
    try {
        const response = await fetch(
            `http://localhost:8888/PRODUCT-SERVICE/api/v1/products/${id}`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const addProduct = async (product: ProductRequest) => {
    try {
        const response = await axios.post(
            "http://localhost:8888/PRODUCT-SERVICE/api/v1/products",
            product
        );
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const updateProduct = async (product: Product) => {
    try {
        const response = await axios.put(
            `http://localhost:8888/PRODUCT-SERVICE/api/v1/products/${product.productId}`,
            product
        );
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const deleteProduct = async (id: number) => {
    try {
        const response = await axios.delete(
            `http://localhost:8888/PRODUCT-SERVICE/api/v1/products/${id}`
        );
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}