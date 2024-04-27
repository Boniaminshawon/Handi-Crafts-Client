import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Layout/Root";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorPage from "../Pages/ErrorPage";
import AllCrafts from "../Pages/AllCrafts";
import AddCraft from "../Pages/AddCraft";
import MyCraft from "../Pages/MyCraft";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
               
            },
            {
            path:'/login',
            element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allCrafts',
                element:<AllCrafts></AllCrafts>
            },
            {
                path:'/addCraft',
                element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>
            },
            {
                path:'/myCraft',
                element:<PrivateRoute><MyCraft></MyCraft></PrivateRoute>
            }
          

        ]
    },
]);
export default router;