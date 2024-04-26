import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Layout/Root";
import Login from "../Components/Login";
import Register from "../Components/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
            }
          

        ]
    },
]);
export default router;