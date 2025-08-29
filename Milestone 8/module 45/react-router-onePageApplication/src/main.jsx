import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Compunents/Root.jsx';
import Mobile from './Compunents/Child/Mobile.jsx';
import Home from './Compunents/Child/Home/Home.jsx';
import Laptop from './Compunents/Child/Laptop/Laptop.jsx';

const router=createBrowserRouter([
 
  
  {path:'app',Component: App},
  {
    path:'/',
    Component:Root,
    children:[
      {index:true,Component:App},
      {path:'mobile',Component:Mobile},
      {path:'laptop',Component:Laptop}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
