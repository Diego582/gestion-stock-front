import { createBrowserRouter } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Shopping from "./pages/Shopping";
import Customer from "./pages/Customer";
import Reports from "./pages/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ventas",
        element: <Sales />,
      },
      {
        path: "/compras",
        element: <Shopping />,
      },
      {
        path: "/clientes",
        element: <Customer />,
      },
      {
        path: "/reportes",
        element: <Reports />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
