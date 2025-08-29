import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Compunents/Home/Navber/Navber';

const Root = () => {
    return (
        <div className=' text-center'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;