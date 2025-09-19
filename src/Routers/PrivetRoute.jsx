import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loding from '../Pages/Loding';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    // console.log("loading:", loading, "user:", user);
    const location = useLocation();
    // console.log(location)
    if(loading){
        return <Loding></Loding>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login/'}></Navigate>
};

export default PrivetRoute;