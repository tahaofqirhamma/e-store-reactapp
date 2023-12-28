import axios from "axios";
import { Client, ClientRequest } from "../lib/Types";

export const getClients = async () => {
    try {
        const response = await axios.get<Client[]>(
            "http://localhost:8888/CLIENT-SERVICE/api/v1/clients"
        );
        const result = response.data;
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const getClient = async (id: number) => {
    try {
        const response = await axios.get<Client>(
            `http://localhost:8888/CLIENT-SERVICE/api/v1/clients/${id}`
        );
        const result = response.data;
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
export const addClient = async (client: ClientRequest) => {
    try {
        const response = await axios.post(
            "http://localhost:8888/CLIENT-SERVICE/api/v1/clients",
            client
        );
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const updateClient = async (id: number, client: ClientRequest) => {
    try {
        const response = await axios.put(
            `http://localhost:8888/CLIENT-SERVICE/api/v1/clients/${id}`,
            client
        );
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const deleteClient = async (id: number) => {
    try {
        const response = await axios.delete(
            `http://localhost:8888/CLIENT-SERVICE/api/v1/clients/${id}`
        );
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}