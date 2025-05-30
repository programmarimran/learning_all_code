import React from 'react';
import { NavLink } from 'react-router';

const Navber = () => {
    const links=<>
    <NavLink to='/'><li className='mx-4'>Home</li></NavLink>
    <NavLink to='/about'><li className='mx-4'>About</li></NavLink>
    <NavLink to='/readList'><li className='mx-4'>Read List</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Boi Poka</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <img className='w-12 h-12 rounded-full' src="https://i.ibb.co.com/JRw8FNzT/cao5-FKvu-D6-PY7j-Oolqaq-Ukl2stx1-profile.jpg" alt="" />
        </div>
      </div>
    );
};

export default Navber;