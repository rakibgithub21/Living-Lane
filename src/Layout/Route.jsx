import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // error page:
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/registration',
                element:<Registration></Registration>
            },
           
        ]
    },
]);