import { useContext } from "react";
import { AuthContext } from "./AuthContextComponent";
import Loading from "./Loading";
import { Navigate, useLocation } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location);
    const { user,loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
    }
    return children
    
};

export default PrivateRoute;