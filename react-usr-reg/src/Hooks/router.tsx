import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";
import Dashboard from "../Pages/Dashboard";
import PageNotFound from "../Pages/PageNotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
    errorElement: <PageNotFound />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]);
