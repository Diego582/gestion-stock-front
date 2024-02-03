import { createBrowserRouter } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/login/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
]);

export default router;
