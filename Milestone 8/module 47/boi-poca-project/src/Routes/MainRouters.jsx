import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import About from '../Conponents/About/About';

  export const router=createBrowserRouter([
     {
       path:'/',
       Component:Root,
       children:[
        {
            path:'/',
            index:true,
            Component:Home
        },
        {path:'about',Component:About}
        
       ]
     }
   ])


