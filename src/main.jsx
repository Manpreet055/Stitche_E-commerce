import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "flowbite-react";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import ProtectedRoute from "./utits/ProtectedRoute.jsx";

const Products = lazy(() => import("./pages/Products.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const ProductOverview = lazy(() => import("./pages/ProductOverview.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            {" "}
            <Homepage />
          </ProtectedRoute>
        ),
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
        path: "login",
        element: (
          <Suspense>
            <LoginPage />
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
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
