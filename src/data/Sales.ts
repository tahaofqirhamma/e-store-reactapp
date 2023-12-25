import axios from "axios";
import { SaleRequest } from "../lib/Types";

export const getSales = async () => {
    try {
        const response = await fetch("http://localhost:8888/SALES-SERVICE/api/v1/sales");
        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error);

    }
}

export const getSale = async (saleId: number) => {
    try {
        const response = await axios.get(`http://localhost:8888/SALES-SERVICE/api/v1/sales/${saleId}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const getMySales = async (clientId: number) => {
    try {
        const response = await axios.get(`http://localhost:8888/SALES-SERVICE/api/v1/sales/${clientId}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }


}

export const addSale = async (sale: SaleRequest) => {
    try {
        const response = await axios.post("http://localhost:8888/SALES-SERVICE/api/v1/sales", sale);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const DeleteSale = async (saleId: number) => {
    try {
        const response = await axios.delete(`http://localhost:8888/SALES-SERVICE/api/v1/sales/${saleId}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const validateSale = async (saleId: number, status: string) => {
    try {
        const response = await axios.put(`http://localhost:8888/SALES-SERVICE/api/v1/sale/${saleId}`, { status });
        console.log(response.data)
        return response;
    }
    catch (error) {
        console.error(error);
    }
}