import { createBrowserRouter } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Shopping from "./pages/Shopping";
import Customer from "./pages/Customer";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Private from "./utils/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Private>
        <MainLayout />
      </Private>
    ),
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
      {
        path: "/productos",
        element: <Products />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
