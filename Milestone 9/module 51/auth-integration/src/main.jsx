import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layout/Root.jsx";
import Home from "./Layout/Home.jsx";
import Login from "./compunents/Navber/Login/Login.jsx";
import Register from "./compunents/Navber/Register/Register.jsx";
import AuthProvider from "./AuthContext/AuthProvider.jsx";
import Profile from "./compunents/Navber/Profile/Profile.jsx";
import PrivateRoute from "./Layout/PrivateROutes/PrivateRoute.jsx";
import Orders from "./compunents/Navber/Orders/Orders.jsx";
import Dashboard from "./compunents/Navber/Dashboard/Dashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path:'/profile',
        Component:Profile
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
