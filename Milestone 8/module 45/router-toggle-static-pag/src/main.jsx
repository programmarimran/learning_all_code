import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Compunents/Root.jsx'
import Home from './Compunents/Home/Home.jsx'
import Blog from './Compunents/Blog/Blog.jsx'
import About from './Compunents/About/About.jsx'
import User from './Compunents/User/User.jsx'
import User2 from './Compunents/User2/User2.jsx'
import ShowDetails from './Compunents/User/ShowDetails/ShowDetails.jsx'
const user2=fetch('https://jsonplaceholder.typicode.com/albums')
.then(res=>res.json())
const router=createBrowserRouter([
  
  {
    path:'/',
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:'blog',Component:Blog},
      {path:'home',Component:Home},
      {path:'about',Component:About},
      {
        path:'user',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
        ,
        Component:User
      },
     {
      path:'user2',
      element:<Suspense>
        <User2 user2={user2}></User2>
      </Suspense>
     },
     {
      path:'user/:userId',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      Component:ShowDetails
     }
    ]
  }
 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
