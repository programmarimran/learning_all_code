import React from 'react';


import { Outlet } from 'react-router';
import Navber from './Header/Navber';
import Footer from './Footer/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col max-w-7xl mx-auto'>
            <Navber></Navber>
            <div className=''><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;