import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../compunents/Navber/Navber';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;