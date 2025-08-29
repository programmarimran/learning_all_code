"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
     const pathname=usePathname();
        console.log(pathname);
        if(pathname.includes("dashboard")){
            return null;
        }
    return (
        <div>
             <footer className='flex justify-between items-center p-5 '>
            <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
            <ul className=' gap-4 flex items-center'><li>home </li>
            <li>item </li>
            <li>about</li></ul>
            <button>Log In</button>
        </footer>
        </div>
    );
};

export default Footer;