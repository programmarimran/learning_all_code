import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Componentss/Home'
import Root from './Componentss/Root/Root'
import Navber from './Componentss/Navber/Navber'
import Login from './login/Login'
const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true,
        Component:Home
      },
      {
        path:'/login',
        Component:Login
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
