import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ShippingCalculator from "../pages/home";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Wrapping all routes inside MainLayout
    children: [
      {
        path: "/",
        element: <ShippingCalculator />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path:"/login",
    element:<AdminLogin/>
  }

]);
