import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home-page";
import TButton from "../testButton";
import RegisterPage from "../pages/register-page";
import LoginPage from "../pages/login-page";
import routeDashboard from "./dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/button",
    element: <TButton />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  ...routeDashboard,
]);

export default router;
