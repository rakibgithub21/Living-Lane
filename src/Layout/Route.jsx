import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import UserProfile from "../pages/UserProfile";
import UpdateProfile from "../pages/UpdateProfile";
import PropertyDetails from "../components/PropertyDetails";
import PrivateRoute from "../components/PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import Bookmarked from "../components/Bookmarked";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
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
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/user-profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/view-property/:id',
                element: <PrivateRoute> <PropertyDetails></PropertyDetails></PrivateRoute>,
                loader:()=>fetch('../data.json')
            },
            {
                path: '/bookmark',
                element: <Bookmarked></Bookmarked>
            },
           
        ]
    },
]);