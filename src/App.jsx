import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/header/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import ContextProvider from "./context/ContextProvider";
import ErrorPage from "./pages/ErrorPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

const Products = lazy(() => import("./pages/Products.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const SignupPage = lazy(() => import("./pages/SignupPage.jsx"));
const PlaceOrderPage = lazy(() => import("./pages/PlaceOrderPage.jsx"));
const UserProfileForm = lazy(() => import("./pages/UserProfileForm.jsx"));
const OrdersHistory = lazy(() => import("./pages/OrdersHistory.jsx"));
const OrderDetails = lazy(() => import("./pages/OrderDetails.jsx"));

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <ScrollToTop />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="products" element={<Products />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <UserProfileForm />
                  </ProtectedRoute>
                }
              />
              <Route path="product/:id" element={<ProductDetailsPage />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route
                path="cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="orders"
                element={
                  <ProtectedRoute>
                    <PlaceOrderPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="orders/history"
                element={
                  <ProtectedRoute>
                    <OrdersHistory />
                  </ProtectedRoute>
                }
              />
              <Route
                path="orders/:id"
                element={
                  <ProtectedRoute>
                    <OrderDetails />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </ContextProvider>
    </Router>
  );
};

export default App;
