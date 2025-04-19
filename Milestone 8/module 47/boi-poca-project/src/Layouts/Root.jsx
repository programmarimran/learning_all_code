import React from 'react';


import { Outlet } from 'react-router';
import Navber from './Header/Navber';
import Footer from './Footer/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col max-w-[1440px] mx-auto'>
            <Navber></Navber>
            <div className=' flex-grow'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;