import React from 'react';
import { useLoaderData } from 'react-router';
import Users from './Users/Users';

const User = () => {
    const user=useLoaderData()
    // console.log(user)
    return (
        <div className=' grid grid-cols-2 gap-3 mx-3'>
            {
                user.map(users=><Users key={users.id} users={users}></Users>)
            }
        </div>
    );
};

export default User;