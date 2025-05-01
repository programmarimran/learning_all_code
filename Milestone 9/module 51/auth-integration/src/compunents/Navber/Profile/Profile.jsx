import React, { use } from 'react';
import { AuthContext } from '../../../AuthContext/Auth-Context';
import { Navigate } from 'react-router';

const Profile = () => {
    const {user}=use(AuthContext)
    if(!user){
      return  <Navigate to={'/login'}></Navigate>
    }
    return (
        <div>
            
            This is profile

        </div>
    );
};

export default Profile;