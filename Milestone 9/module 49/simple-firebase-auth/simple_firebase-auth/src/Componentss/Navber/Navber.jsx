import React from 'react';
import { NavLink } from 'react-router';

const Navber = () => {
    return (
        <div>
            <ul className=' flex gap-4 mb-8'>
            <NavLink className='btn' to={'/'}>Home</NavLink>
            <NavLink className='btn' to={'/login'}>Login</NavLink> 
            </ul>
        </div>
    );
};

export default Navber;