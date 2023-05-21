import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/Product-Details/Product-Details";

const Routes = createBrowserRouter([
    { 
        path: "/",
        element: <Home />
    },
    { 
        path: "/products",
        element: <Products />
    },
    { 
        path: "/products/:id",
        element: <ProductDetails />
    }
])

export default Routes;