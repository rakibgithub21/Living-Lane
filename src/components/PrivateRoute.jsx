import { useContext } from "react";
import { AuthContext } from "./AuthContextComponent";
import Loading from "./Loading";
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation();
    // console.log(location,'private route');
    if (loading) {
        return <Loading></Loading>
    }
    
    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
        
    }
    
    // return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
   
    
};
PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;