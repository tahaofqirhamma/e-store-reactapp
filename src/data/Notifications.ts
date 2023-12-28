import axios from "axios";
import { Notifications } from "../lib/Types";

export const getNotifications = async () => {
    try {
        const response = await axios.get<Notifications[]>("http://localhost:8888/NOTIFICATION-SERVICE/api/v1/notifications");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const getLastNotification = async () => {
    try {
        const response = await axios.get<Notifications>("http://localhost:8888/NOTIFICATION-SERVICE/api/v1/last-notification");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}