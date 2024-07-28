import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Common/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import PrivateRoute from "../Components/Auth/PrivateRoute/PrivateRoute";
import Login from "../Components/Auth/ManualLogin/Login";
import Register from "../Components/Auth/ManualLogin/Register";
import AboutUs from "../Pages/Common/AboutUs";
import ContactUs from "../Pages/Common/ContactUs";
import Gallery from "../Pages/Common/Gallery";
import Students from "../Pages/Common/Students";
import Faculty from "../Pages/Common/Faculty";
import Admissions from "../Pages/Common/Admissions";
import Academics from "../Pages/Common/Academics";

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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/faculty",
        element: <Faculty />,
      },
      {
        path: "/admissions",
        element: <Admissions />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "d",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;
