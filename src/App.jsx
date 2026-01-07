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
const ThanksGiving = lazy(() => import("./layout/orders/ThanksGiving.jsx"));

const LoadingFallback = () => (
  <div className="h-screen w-full text-theme grid place-items-center">
    Loading...
  </div>
);

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="products"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <Products />
                </Suspense>
              }
            />
            <Route
              path="login"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="signup"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <SignupPage />
                </Suspense>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingFallback />}>
                    <UserProfileForm />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="product/:id"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <ProductDetailsPage />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <ContactPage />
                </Suspense>
              }
            />
            <Route
              path="search"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <SearchPage />
                </Suspense>
              }
            />
            <Route
              path="cart"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingFallback />}>
                    <Cart />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="orders"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingFallback />}>
                    <PlaceOrderPage />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="orders/history"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingFallback />}>
                    <OrdersHistory />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="orders/:id"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingFallback />}>
                    <OrderDetails />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="orders/success/:id"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingFallback />}>
                    <ThanksGiving />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </ContextProvider>
    </Router>
  );
};

export default App;
