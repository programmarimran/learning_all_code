import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Conpunents/Main.jsx';
import Phones from './Conpunents/Phones.jsx';
import Phone from './Conpunents/phone.jsx';
// import Phone from './Conpunents/Phone.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        
        path:"phones",
        element: <Phones/>,
        loader:()=>fetch("http://localhost:3000/phones")
      },
      {
        path:"/phones/:id",
        element:<Phone></Phone>,
        loader:({params})=>fetch(`http://localhost:3000/phones/${params.id}`)
      },
     

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
