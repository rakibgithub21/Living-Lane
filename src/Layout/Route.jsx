import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Contactus from "../pages/Contactus";
import UserProfile from "../pages/UserProfile";
import UpdateProfile from "../pages/UpdateProfile";
import PropertyDetails from "../components/PropertyDetails";
import PrivateRoute from "../components/PrivateRoute";


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
            {
                path: '/update-profile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path: '/user-profile',
                element:<UserProfile></UserProfile>
            },
            {
                path: '/contact-us',
                element:<Contactus></Contactus>
            },
            {
                path: '/view-property/:id',
                element: <PrivateRoute> <PropertyDetails></PropertyDetails></PrivateRoute>,
                loader:()=>fetch('../data.json')
            },
           
        ]
    },
]);