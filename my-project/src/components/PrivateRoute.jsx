import React, { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const {user}=useContext(authContext);
    const location=useLocation();

    // if(loading){
    //     return <h1>Loading...</h1>
    // }


    if(!user){
        return <Navigate state={{ from: location }} replace to={'/login'} ></Navigate>
    }




    return children
};

export default PrivateRoute;