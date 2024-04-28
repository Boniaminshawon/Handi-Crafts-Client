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
import CraftsDetails from "../Components/CraftsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craftItem')

            },
            {
                path: '/:id',
                element: <PrivateRoute><CraftsDetails></CraftsDetails></PrivateRoute>,
                loader: ({ params })=>fetch(`http://localhost:5000/craftItem/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allCrafts',
                element: <AllCrafts></AllCrafts>
            },
            {
                path: '/addCraft',
                element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
            },
            {
                path: '/myCraft',
                element: <PrivateRoute><MyCraft></MyCraft></PrivateRoute>
            }


        ]
    },
]);
export default router;