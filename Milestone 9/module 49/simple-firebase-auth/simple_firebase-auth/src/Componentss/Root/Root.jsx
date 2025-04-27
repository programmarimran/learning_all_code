import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className=' mx-auto w-[100%] mx-auto flex flex-col justify-center items-center'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;