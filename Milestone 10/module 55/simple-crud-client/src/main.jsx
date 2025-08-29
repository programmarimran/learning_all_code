import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Details from './compunents/Details.jsx';
import Update from './compunents/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path:"/details/:id",
    loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
    element:<Details></Details>
  },
  {
    path:"/update/:id",
    loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
    element:<Update></Update>
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
