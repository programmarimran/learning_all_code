import React, { use } from 'react';
import { AuthContext } from '../../AuthContext/Auth-Context';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    // console.log(location)
    const {user,loading}=use(AuthContext)
    if(loading){
        return <div className=" mx-auto w-24 h-24 border-4 border-dashed rounded-full animate-ping dark:border-violet-600"></div>
    }
    if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
   return children
};

export default PrivateRoute;