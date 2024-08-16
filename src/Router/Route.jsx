import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home";
import Signup from "../components/Register/Signup";
import Login from "../Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/signup",
        element: <Signup></Signup>
      },{
        path:"/login",
        element:<Login></Login>
      }
    ],
  },
]);
