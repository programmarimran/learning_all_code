import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Home from './Compunents/Home/Home.jsx'
import Login from './Compunents/Login/Login.jsx'
import Register from './Compunents/Register/Register.jsx'
import Signup from './Compunents/Signup/Signup.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
        index:true,Component:Home
      },
      {
        path:'login',
        Component:Login
      },
      {
        path:'signup',
        Component:Signup
      },
      {
        path:'register',
        Component:Register
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
