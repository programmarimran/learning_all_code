import React from 'react';
import Home from './Child/Home/Home';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            
        </div>
       
    );
};

export default Root;