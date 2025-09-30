import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home , About , Contact} from "./components/index.js"
import Layout from "./Layout.jsx"
/*
router → define all routes (path → component mapping)

RouterProvider → gives this router to your app

Result → React app can navigate between multiple pages dynamically
*/

const router = createBrowserRouter([
  {
    path:"/", 
    element : <Layout />,
    children: [
      {path : "" ,element : <Home/>}, 
      {path : "about" , element : <About/>},
      {path : "contact", element : <Contact/>}
    ]
  }
  
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>
)
