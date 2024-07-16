import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
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
    path: "/user/:id",
    element: <Detail />,
  },
  {
    path: "/add-user",
    element: <Add />,
  },
  {
    path: "/edit-user/:id",
    element: <Edit />,
  },
]);

export default router;
