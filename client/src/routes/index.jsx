import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetalle from "../pages/products/ProductDetalle";
import ProductEditar from "../pages/products/ProductEditar";
import Products from "../pages/products/Products";
import ProductsAdd from "../pages/products/ProductsAdd";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/agregar",
        element: <ProductsAdd />,
      },
      {
        path: "products/:id",
        element: <ProductDetalle />,
      },
      {
        path: "products/:id/editar",
        element: <ProductEditar />,
      },
    ],
  },
]);
