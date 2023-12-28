import axios from "axios";
import { Sale, SaleRequest } from "../lib/Types";

export const getSales = async () => {
    try {
        const response = await axios.get<Sale[]>("http://localhost:8888/SALES-SERVICE/api/v1/sales");
        const result = response.data;
        return result;

    } catch (error) {
        console.error(error);

    }
}

export const getSale = async (saleId: number) => {
    try {
        const response = await axios.get<Sale>(`http://localhost:8888/SALES-SERVICE/api/v1/sales/${saleId}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const getMySales = async (clientId: string) => {
    try {
        const response = await axios.get<Sale[]>(`http://localhost:8888/SALES-SERVICE/api/v1/sales/${clientId}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }


}

export const addSale = async (sale: SaleRequest) => {
    try {
        const response = await axios.post("http://localhost:8888/SALES-SERVICE/api/v1/sales", sale);
        return response;
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
        return response.data.status as string;
    }
    catch (error) {
        console.error(error);
    }
}