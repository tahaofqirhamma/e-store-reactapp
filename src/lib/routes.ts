import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Clients from "../pages/Clients";
import Products from "../pages/Products";
import Sales from "../pages/Sales";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/clients",
                Component: Clients,
            },
            {
                path: "/products",
                Component: Products,
            },
            {
                path: "/sales",
                Component: Sales,
            },


        ],

    },


]);
export default router;