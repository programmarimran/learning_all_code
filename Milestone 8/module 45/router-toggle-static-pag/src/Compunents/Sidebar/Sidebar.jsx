import React from 'react';
import { NavLink} from 'react-router';
const Sidebar = () => {
    return (
        <div className=' border-2 border-red-500 mt-3 p-4 rounded-2xl'>
             <nav className='nav-icon flex flex-col gap-3  justify-center'>
           <NavLink to={'blog'}>blog</NavLink>
           <NavLink to={'about'}>About</NavLink>
           <NavLink to={'home'}>Home</NavLink>
           <NavLink to={'user'}>user</NavLink>
           <NavLink to={'user2'}>user2</NavLink>
           </nav>
        </div>
    );
};

export default Sidebar;