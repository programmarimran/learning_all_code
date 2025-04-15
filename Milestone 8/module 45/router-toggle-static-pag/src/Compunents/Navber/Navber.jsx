import React from 'react';
import { NavLink} from 'react-router';
const Navber = () => {
    return (
        <div className='flex justify-between border-2 border-red-500 p-4 rounded-2xl'>
            <h1>Programmar International</h1>
            <nav className='nav-icon flex gap-3  justify-center'>
           <NavLink to={'blog'}>blog</NavLink>
           <NavLink to={'about'}>About</NavLink>
           <NavLink to={'home'}>Home</NavLink>
           <NavLink to={'user'}>user</NavLink>
           <NavLink to={'user2'}>user2</NavLink>
           </nav>
            <button className='btn'>Profile</button>
        </div>
    );
};

export default Navber;