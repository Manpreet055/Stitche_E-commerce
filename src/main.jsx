import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage.jsx";
import Homepage from "./Pages/Homepage.jsx";
import About from "./Pages/About.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import ProductOverview from "./Components/Products/ProductOverview.jsx";
import AllProductsPage from "./Pages/AllProductsPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      { 
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            path:"",
            element:<AllProductsPage />
          },
          {
            path: "ProductOverview/:Id",
            element: <ProductOverview />,
            errorElement:<ErrorPage />
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
