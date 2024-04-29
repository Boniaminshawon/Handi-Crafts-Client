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
import UpdatePage from "../Pages/UpdatePage";
import BlogsDetails from "../Components/Home/BlogsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://handi-crafts-server.vercel.app/craftItem')

            },
            {
                path: '/:id',
                element: <PrivateRoute><CraftsDetails></CraftsDetails></PrivateRoute>,
                loader: ({ params })=>fetch(`https://handi-crafts-server.vercel.app/craftItem/${params.id}`)
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
                element: <AllCrafts></AllCrafts>,
                loader: () => fetch('https://handi-crafts-server.vercel.app/craftItem')
            },
            {
                path: '/addCraft',
                element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
            },
            {
                path: '/myCraft',
                element: <PrivateRoute><MyCraft></MyCraft></PrivateRoute>,
                loader: () => fetch('https://handi-crafts-server.vercel.app/craftItem')
               
            },
            {
                path:'myCraft/:id',
                element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
                loader: ({ params })=>fetch(`https://handi-crafts-server.vercel.app/craftItem/${params.id}`)
            },
            {
                path:'/blogs/:id',
                element:<BlogsDetails></BlogsDetails>,
                loader: () => fetch('/blogs.json')
            }


        ]
    },
]);
export default router;