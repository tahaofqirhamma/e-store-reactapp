import { getKeycloakInstance } from "./KeyCloak";

const keyCloak = getKeycloakInstance();

export const getRoles = () => {
    const isAdmin = keyCloak.tokenParsed?.realm_access?.roles.includes("ADMIN");
    if (isAdmin) {
        return true;
    }
    return false;
}

export const getUserName = () => {
    return keyCloak.tokenParsed?.preferred_username;
}

export const getUserId = () => {
    return keyCloak.tokenParsed?.sub;
}