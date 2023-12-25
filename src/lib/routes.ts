import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Clients from "../pages/Clients";
import Products from "../pages/Products";
import Sales from "../pages/Sales";
import Home from "../pages/Home";
const router = createBrowserRouter([
    {
        path: "/Home", // Concatenate the parent path with the child path
        Component: Layout,
        children: [
            {
                path: "/Home/clients", // Concatenate the parent path with the child path
                Component: Clients,
            },
            {
                path: "/Home/products", // Concatenate the parent path with the child path
                Component: Products
            },
            {
                path: "/Home/sales", // Concatenate the parent path with the child path
                Component: Sales
            },
            {
                path: "/Home/welcome", // Concatenate the parent path with the child path
                Component: Home,
            }
        ]

    }
]);


export default router;