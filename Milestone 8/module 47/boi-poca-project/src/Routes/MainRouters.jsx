import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import About from '../Conponents/About/About';
import axios from 'axios';
import CardDetails from '../Conponents/CardDetails/CardDetails';
import ReadList from '../Conponents/ReadList/ReadList';

  export const router=createBrowserRouter([
     {
       path:'/',
       Component:Root,
       children:[
        {
          index:true,
          path:'/',
          hydrateFallbackElement:<p className=' text-center text-green-500'>Please wait data is loading.......</p>,
          loader:()=>axios(`https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json`),
          Component:Home
        },
        {path:'about',Component:About},
        {
          path:'/cardDetails/:id',
          loader:()=>axios(`https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json`),
          Component:CardDetails
        },
        {
          path:'/readList',
          loader:()=>axios(`https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json`),
          Component:ReadList
        },
        {
          path:'*',
          element:<h1> page not found 404</h1>
        }
        
       ]
     }
   ])


