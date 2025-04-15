import React from 'react';
import './Root.css'
import { NavLink, Outlet, useNavigation } from 'react-router';
import Navber from './Navber/Navber';
import Sidebar from './Sidebar/Sidebar';

const Root = () => {
    const navigation=useNavigation()
    const isNavigation=Boolean(navigation.location)
    return (
        <div>
            <Navber></Navber>
           <div className='flex text-center'>
            <span className=' flex-none'><Sidebar ></Sidebar></span>
            {
                isNavigation&& <h1>Data loading.....</h1>
            }
            <span className=' flex-1'><Outlet ></Outlet></span>
           </div>
         
            
        </div>
    );
};

export default Root;


  {/* <NavLink className={({ isActive }) => (isActive ? 'text-red-500' : 'text-yellow-400')} to={'blog'}>blog</NavLink>
           <NavLink className={({ isActive }) => (isActive ? 'text-red-500' : 'text-yellow-400')} to={'about'}>About</NavLink>
           <NavLink className={({ isActive }) => (isActive ? 'text-red-500' : 'text-yellow-400')} to={'home'}>Home</NavLink> */}
           