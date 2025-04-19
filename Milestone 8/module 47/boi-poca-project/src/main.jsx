import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router'
import { router } from './Routes/MainRouters.jsx'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,


)
