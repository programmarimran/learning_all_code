import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import About from '../Conponents/About/About';
import axios from 'axios';
import CardDetails from '../Conponents/CardDetails/CardDetails';

  export const router=createBrowserRouter([
     {
       path:'/',
       Component:Root,
       children:[
        {
          index:true,
          loader:()=>axios(`https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json`),
          path:'/',
          Component:Home
        },
        {path:'about',Component:About},
        {path:'/cardDetails/:id',Component:CardDetails}
        
       ]
     }
   ])


