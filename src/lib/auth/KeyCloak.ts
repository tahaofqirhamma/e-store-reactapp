import Keycloak from "keycloak-js";
import { httpClient } from './HttpClient';

const keycloakConfig = {
    url: "http://localhost:8080/",
    realm: "estore-app-frontend",
    clientId: "estoreapp-front",
    redirectUri: "http://localhost:5173/Home",
};

const keycloakInstance = new Keycloak(keycloakConfig);

keycloakInstance.init({
    onLoad: "login-required",
    checkLoginIframe: true,
    pkceMethod: "S256",
    redirectUri: "http://localhost:5173/Home",
})
    .then((authenticated) => {
        if (!authenticated) {
            window.location.reload();
        } else {

            httpClient.defaults.headers.common['Authorization'] = `Bearer ${keycloakInstance.token}`;

            keycloakInstance.onTokenExpired = () => {
                console.log("Token expired");
                // Handle token expiration as needed
            };
        }
    })
    .catch((error) => {
        console.error("Keycloak initialization error", error);
    });

export const getKeycloakInstance = () => {
    return keycloakInstance;


};

export const handelLogout = async () => {
    try {
        await keycloakInstance.logout();

    } catch (error) {
        console.error("Logout error:", error);
    }
};