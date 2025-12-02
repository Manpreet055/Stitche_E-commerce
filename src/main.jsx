import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Homepage from "./pages/Homepage.jsx";

const Products = lazy(() => import("./pages/Products.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const ProductOverview = lazy(() => import("./pages/ProductOverview.jsx"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "products",
        element: (
          <Suspense>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense>
            <ProductOverview />
          </Suspense>
        ),
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
  </StrictMode>,
);
