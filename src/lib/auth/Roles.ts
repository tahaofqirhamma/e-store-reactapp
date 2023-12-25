import { getKeycloakInstance } from "./KeyCloak";

export const getRoles = () => {
    const keyCloak = getKeycloakInstance();
    const isAdmin = keyCloak.tokenParsed?.realm_access?.roles.includes("ADMIN");
    if (isAdmin) {
        return true;
    }
    return false;
}
const keyCloak = getKeycloakInstance();

export const getUserName = () => {
    return keyCloak.tokenParsed?.preferred_username;
}


export const getUserId = () => {
    return keyCloak.tokenParsed?.sub;
}