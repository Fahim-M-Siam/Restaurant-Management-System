// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllFoodItems from "../Pages/AllFoodItems";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddFood from "../Pages/User/AddFood";
import Orders from "../Pages/User/Orders/Orders";
import Myfoods from "../Pages/User/MyFood/Myfoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "allfooditems",
        element: <AllFoodItems></AllFoodItems>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/user/addedfooditems",
        element: <Myfoods></Myfoods>,
      },
      {
        path: "/user/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/user/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
