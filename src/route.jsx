import { createBrowserRouter, redirect } from "react-router-dom";
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
    loader: () => {
      if (!localStorage.username_login) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.username_login) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user/:id",
    element: <Detail />,
    loader: () => {
      if (!localStorage.username_login) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/add-user",
    element: <Add />,
    loader: () => {
      if (!localStorage.username_login) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/edit-user/:id",
    element: <Edit />,
    loader: () => {
      if (!localStorage.username_login) {
        return redirect("/login");
      }
      return null;
    },
  },
]);

export default router;
