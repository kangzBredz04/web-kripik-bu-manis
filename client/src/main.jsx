import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin.jsx";
import ErrorPageACust from "./pages/ErrorPageCust.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ErrorPageAdmin from "./pages/ErrorPageAdmin.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import CartCustomer from "./pages/CartCustomer.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import ProfileAdmin from "./pages/ProfileAdmin.jsx";
import ShopProduct from "./pages/ShopProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageACust />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/product/:id",
        element: <DetailProduct />,
      },
      {
        path: "/cart",
        element: <CartCustomer />,
      },
      {
        path: "/shop",
        element: <ShopProduct />,
      },
      {
        path: "/profile",
        element: <MyAccount />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPageAdmin />,
    children: [
      {
        path: "/admin",
        element: <DashboardAdmin />,
      },
      {
        path: "/admin/profile",
        element: <ProfileAdmin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
